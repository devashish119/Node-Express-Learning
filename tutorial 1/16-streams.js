const {createReadStream} = require('fs');

const stream= createReadStream('./Content/big-file.txt');

stream.on('data',(res)=>{
    console.log(res);
})

stream.on('end',(res)=>{
    console.log('data read complete!');
})

stream.on('error',(res)=>{
    console.log(`error:${res}`);
})