const fs = require('fs');
fs.mkdirSync("nodejs");

fs.writeFileSync("nodejs/text.txt","Hello Everyone!!");

fs.appendFileSync("nodejs/text.txt","This is my first node js task.");

const data = fs.readFileSync("nodejs/text.txt","utf8");
console.log(data);

fs.renameSync("nodejs/text.txt","nodejs/myText.txt");

fs.unlinkSync("nodejs/myText.txt");

fs.rmdirSync("nodejs");