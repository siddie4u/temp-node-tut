const os = require('os');

//get user info
const user = os.userInfo();
console.log(user);

//method returns the system uptime
console.log(`The system uptime us ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);