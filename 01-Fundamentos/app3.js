const fs = require('fs') //FileSysytem

const content = fs.readFileSync('readme.md', 'utf8')

const wordCount = content.split(" ")

console.log(wordCount.length)