const fs = require('fs');
const textIn = fs.readFileSync('./input.txt','utf-8');
// console.log(textIn)
const textOut=`this is the content of the file that i have read ${textIn}at date and time ${Date.now()}`
fs.writeFileSync('./output.txt',textOut)
console.log("ho gya bhai save")