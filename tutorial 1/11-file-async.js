const {readFile , writeFile} = require('fs');

readFile('./Content/first.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }

//    console.log(result);
    const first=result;
    readFile('./Content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
    
      //  console.log(result);
        const second=result;
    writeFile('./Content/result.txt',
    `result is here: ${first} and ${second}`,
    {flag:'a'},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
    })
    })
});