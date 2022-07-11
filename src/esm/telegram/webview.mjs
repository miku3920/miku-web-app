var eventHandlers = {};

var locationHash = '';
try {
  locationHash = location.hash.toString();
} catch (e) {}

var initParams = urlParseHashParams(locationHash);
var storedParams = sessionStorageGet('initParams');
if (storedParams) {
  for (var key in storedParams) {
    if (typeof initParams[key] === 'undefined') {
      initParams[key] = storedParams[key];
    }
  }
}
sessionStorageSet('initParams', initParams);

var isIframe = false, iFrameStyle;
try {
  isIframe = (window.parent != null && window != window.parent);
  if (isIframe) {
    window.addEventListener('message', function (event) {
      if (event.source !== window.parent) return;
      try {
        var dataParsed = JSON.parse(event.data);
      } catch (e) {
        return;
      }
      if (!dataParsed || !dataParsed.eventType) {
        return;
      }
      if (dataParsed.eventType == 'set_custom_style') {
        iFrameStyle.innerHTML = dataParsed.eventData;
      } else {
        receiveEvent(dataParsed.eventType, dataParsed.eventData);
      }
    });
    iFrameStyle = document.createElement('style');
    document.head.appendChild(iFrameStyle);
    try {
      var trustedTarget = 'https://web.telegram.org';
      // For now we don't restrict target, for testing purposes
      // trustedTarget = '*';
      window.parent.postMessage(JSON.stringify({eventType: 'iframe_ready'}), trustedTarget);
    } catch (e) {}
  }
} catch (e) {}

function urlSafeDecode(urlencoded) {
  try {
    urlencoded = urlencoded.replace(/\+/g, '%20');
    return decodeURIComponent(urlencoded);
  } catch (e) {
    return urlencoded;
  }
}

function urlParseHashParams(locationHash) {
  locationHash = locationHash.replace(/^#/, '');
  var params = {};
  if (!locationHash.length) {
    return params;
  }
  if (locationHash.indexOf('=') < 0 && locationHash.indexOf('?') < 0) {
    params._path = urlSafeDecode(locationHash);
    return params;
  }
  var qIndex = locationHash.indexOf('?');
  if (qIndex >= 0) {
    var pathParam = locationHash.substr(0, qIndex);
    params._path = urlSafeDecode(pathParam);
    locationHash = locationHash.substr(qIndex + 1);
  }
  var query_params = urlParseQueryString(locationHash);
  for (var k in query_params) {
    params[k] = query_params[k];
  }
  return params;
}

function urlParseQueryString(queryString) {
  var params = {};
  if (!queryString.length) {
    return params;
  }
  var queryStringParams = queryString.split('&');
  var i, param, paramName, paramValue;
  for (i = 0; i < queryStringParams.length; i++) {
    param = queryStringParams[i].split('=');
    paramName = urlSafeDecode(param[0]);
    paramValue = param[1] == null ? null : urlSafeDecode(param[1]);
    params[paramName] = paramValue;
  }
  return params;
}

// Telegram apps will implement this logic to add service params (e.g. tgShareScoreUrl) to game URL
function urlAppendHashParams(url, addHash) {
  // url looks like 'https://game.com/path?query=1#hash'
  // addHash looks like 'tgShareScoreUrl=' + encodeURIComponent('tgb://share_game_score?hash=very_long_hash123')

  var ind = url.indexOf('#');
  if (ind < 0) {
    // https://game.com/path -> https://game.com/path#tgShareScoreUrl=etc
    return url + '#' + addHash;
  }
  var curHash = url.substr(ind + 1);
  if (curHash.indexOf('=') >= 0 || curHash.indexOf('?') >= 0) {
    // https://game.com/#hash=1 -> https://game.com/#hash=1&tgShareScoreUrl=etc
    // https://game.com/#path?query -> https://game.com/#path?query&tgShareScoreUrl=etc
    return url + '&' + addHash;
  }
  // https://game.com/#hash -> https://game.com/#hash?tgShareScoreUrl=etc
  if (curHash.length > 0) {
    return url + '?' + addHash;
  }
  // https://game.com/# -> https://game.com/#tgShareScoreUrl=etc
  return url + addHash;
}

function postEvent(eventType, callback, eventData) {
  if (!callback) {
    callback = function () {};
  }
  if (eventData === undefined) {
    eventData = '';
  }

  if (window.TelegramWebviewProxy !== undefined) {
    window.TelegramWebviewProxy.postEvent(eventType, JSON.stringify(eventData));
    callback();
  }
  else if (window.external && 'notify' in window.external) {
    window.external.notify(JSON.stringify({eventType: eventType, eventData: eventData}));
    callback();
  }
  else if (isIframe) {
    try {
      var trustedTarget = 'https://web.telegram.org';
      // For now we don't restrict target, for testing purposes
      // trustedTarget = '*';
      window.parent.postMessage(JSON.stringify({eventType: eventType, eventData: eventData}), trustedTarget);
      if (initParams.tgWebAppDebug) {
        console.log('[Telegram.WebView] postEvent via postMessage', eventType, eventData);
      }
      callback();
    } catch (e) {
      callback(e);
    }
  }
  else {
    if (initParams.tgWebAppDebug) {
      console.log('[Telegram.WebView] postEvent', eventType, eventData);
    }
    callback({notAvailable: true});
  }
};

function receiveEvent(eventType, eventData) {
  callEventCallbacks(eventType, function(callback) {
    callback(eventType, eventData);
  });
}

function callEventCallbacks(eventType, func) {
  var curEventHandlers = eventHandlers[eventType];
  if (curEventHandlers === undefined ||
      !curEventHandlers.length) {
    return;
  }
  for (var i = 0; i < curEventHandlers.length; i++) {
    try {
      func(curEventHandlers[i]);
    } catch (e) {}
  }
}

function onEvent(eventType, callback) {
  if (eventHandlers[eventType] === undefined) {
    eventHandlers[eventType] = [];
  }
  var index = eventHandlers[eventType].indexOf(callback);
  if (index === -1) {
    eventHandlers[eventType].push(callback);
  }
};

function offEvent(eventType, callback) {
  if (eventHandlers[eventType] === undefined) {
    return;
  }
  var index = eventHandlers[eventType].indexOf(callback);
  if (index === -1) {
    return;
  }
  eventHandlers[eventType].splice(index, 1);
};

function openProtoUrl(url) {
  if (!url.match(/^(web\+)?tgb?:\/\/./)) {
    return false;
  }
  var useIframe = navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad/i) ? true : false;
  if (useIframe) {
    var iframeContEl = document.getElementById('tgme_frame_cont') || document.body;
    var iframeEl = document.createElement('iframe');
    iframeContEl.appendChild(iframeEl);
    var pageHidden = false;
    var enableHidden = function () {
      pageHidden = true;
    };
    window.addEventListener('pagehide', enableHidden, false);
    window.addEventListener('blur', enableHidden, false);
    if (iframeEl !== null) {
      iframeEl.src = url;
    }
    setTimeout(function() {
      if (!pageHidden) {
        window.location = url;
      }
      window.removeEventListener('pagehide', enableHidden, false);
      window.removeEventListener('blur', enableHidden, false);
    }, 2000);
  }
  else {
    window.location = url;
  }
  return true;
}

function sessionStorageSet(key, value) {
  try {
    window.sessionStorage.setItem('__telegram__' + key, JSON.stringify(value));
    return true;
  } catch(e) {}
  return false;
}
function sessionStorageGet(key) {
  try {
    return JSON.parse(window.sessionStorage.getItem('__telegram__' + key));
  } catch(e) {}
  return null;
}

var WebView = {
  initParams: initParams,
  isIframe: isIframe,
  onEvent: onEvent,
  offEvent: offEvent,
  postEvent: postEvent,
  receiveEvent: receiveEvent,
  callEventCallbacks: callEventCallbacks
};

var Utils = {
  urlSafeDecode: urlSafeDecode,
  urlParseQueryString: urlParseQueryString,
  urlParseHashParams: urlParseHashParams,
  urlAppendHashParams: urlAppendHashParams,
  sessionStorageSet: sessionStorageSet,
  sessionStorageGet: sessionStorageGet
};

var Game = {
  // For Windows Phone app
  Proxy_receiveEvent: receiveEvent,
  // App backward compatibility
  Proxy: {
    receiveEvent: receiveEvent
  }
};

export default {
  WebView: WebView,
  Utils: Utils,
  Game: Game
};
