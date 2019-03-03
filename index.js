const os = require('os')

class Uptime {
    time(){
        let time = os.uptime()
        console.log('UPTIME :')
        console.log('---------')
        console.log(`uptime in Secounds : ${time} secounds`)
        console.log(`uptime in hours : ${parseInt(time/3600)} hours`)
        console.log(`uptime in days : ${parseInt(time/86400)} days`)
    }
}

module.exports = Uptime
