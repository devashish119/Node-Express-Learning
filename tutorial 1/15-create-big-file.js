const filewrite = require('fs');

for( let i=0;i<10000;i++){
    filewrite.writeFileSync('./Content/big-file.txt',`line no: ${i}\n`,{flag:'a'});
}