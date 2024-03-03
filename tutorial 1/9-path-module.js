const { log } = require('console');
const path=require('path');

console.log(path.sep);

const filepath=path.join("/Content",'subContent','sample.txt');

log(filepath);

log(path.basename(filepath));