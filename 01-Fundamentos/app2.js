const fs = require('fs')

const data = fs.readFileSync("./readme.md", 'utf8')

console.log(data)

const newData = data.replace(/aplicacion/gi, "Windows, LInux")

console.log(newData)

fs.writeFileSync("./newDoc.md" , newData)