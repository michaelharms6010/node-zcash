const {exec} = require("child_process")

function doZecwallet(command, params) {
    exec(`zecwallet-cli ${command} ${params}`, (err, stdout, stderr) => {
        console.log(err)
        console.log(stderr)
        console.log(stdout)
    })
}


function getBalance(zaddr) {
    exec(`zecwallet-cli balance ${zaddr}`, (err, stdout, stderr) => {
        console.log(err)
        console.log(stderr)
        console.log(stdout)
    })
    // do rpc to get balance
    console.log("doing rpc")
}

function send(params) {
    exec(`zecwallet-cli send ${params}`, (err, stdout, stderr) => {
        console.log(err)
        console.log(stderr)
        console.log(stdout)
    })
}

function send(params) {
    exec(`zecwallet-cli send ${params}`, (err, stdout, stderr) => {
        console.log(err)
        console.log(stderr)
        console.log(stdout)
    })
}


module.exports = {
    getBalance,
    send
}