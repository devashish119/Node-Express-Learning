const {readFileSync , writeFileSync} = require('fs');

const first= readFileSync('./Content/first.txt','utf-8');
const second= readFileSync('./Content/second.txt','utf-8');

writeFileSync(
    './Content/result.txt',
    `result is here: ${first} and ${second}`,
    {flag:'a'}
);