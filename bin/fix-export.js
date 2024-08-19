const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, '../dist/telegram.js'), 'utf8')
const search = fs.readFileSync(path.join(__dirname, './search.txt'), 'utf8')
const replace = fs.readFileSync(path.join(__dirname, './replace.txt'), 'utf8')
const dataFix = data.replace(search, replace)

console.log('\n', data.substring(0, 356), '\n', dataFix.substring(0, 417))

fs.writeFileSync(path.join(__dirname, '../dist/telegram.js'), dataFix)

const dataMin = fs.readFileSync(path.join(__dirname, '../dist/telegram.min.js'), 'utf8')
const searchMin = fs.readFileSync(path.join(__dirname, './search.min.txt'), 'utf8')
const replaceMin = fs.readFileSync(path.join(__dirname, './replace.min.txt'), 'utf8')
const dataFixMin = dataMin.replace(searchMin, replaceMin)

console.log('\n', dataMin.substring(0, 208), '\n', dataFixMin.substring(0, 283))

fs.writeFileSync(path.join(__dirname, '../dist/telegram.min.js'), dataFixMin)