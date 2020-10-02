const fetch = require('node-fetch')

exports.home = async function(req, res) {
    const result = await calc()
    res.send(result)
}

function calc() {
    return new Promise((resolve, reject) => {
        const obj = {}
        for(let i = 0; i < 2000000; ++i) {
            obj[i] = {[Math.random()]: Math.random()}
        }
        const jsonString = JSON.stringify(obj)
        const obj2 = JSON.parse(jsonString)
        
        resolve('success')
    })
}


    