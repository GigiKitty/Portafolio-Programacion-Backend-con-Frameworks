import fs from "fs";

const data =fs.readFileSync("./readme.md" , "utf8")

const regex = new RegExp( "y" , "gi")

const matches =data.match(regex)

console.log(matches.length)
