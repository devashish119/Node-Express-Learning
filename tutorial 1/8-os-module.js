const { log } = require('console');
const os = require('os');

// print user info
const user=os.userInfo();
console.log(user);

//get system uptime
console.log(`system uptime is : ${os.uptime()} seconds`);

//os details

const details= {
    name:os.type(),
    release:os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}

console.log(details);
