//commonJS, every file is a module
//helps to achieve encapsulation - share only important details

const print= require('./5-util');
const {john,peter} = require('./4-names');

print(john);
print(peter);