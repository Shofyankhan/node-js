const path = require('path');

console.log(path.sep)

const filePath = path.join('/content' , 'subfolder', 'test.txt')
console.log(filePath)

const base = path.base(filePath)
console.log(base)

const absolute  =path.resolve(__dirnames,'content','subfolder','test.txt')
console.log(absolute)
