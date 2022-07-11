const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, '../dist/telegram.js'), 'utf8')
const search = fs.readFileSync(path.join(__dirname, './search.txt'), 'utf8')
const replace = fs.readFileSync(path.join(__dirname, './replace.txt'), 'utf8')

fs.writeFileSync(path.join(__dirname, '../dist/telegram.js'), data.replace(search, replace))

const dataMin = fs.readFileSync(path.join(__dirname, '../dist/telegram.min.js'), 'utf8')
const searchMin = fs.readFileSync(path.join(__dirname, './search.min.txt'), 'utf8')
const replaceMin = fs.readFileSync(path.join(__dirname, './replace.min.txt'), 'utf8')

fs.writeFileSync(path.join(__dirname, '../dist/telegram.min.js'), dataMin.replace(searchMin, replaceMin))