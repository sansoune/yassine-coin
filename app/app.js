const express = require('express')
const app = express()
require('dotenv').config({ path: __dirname + '/.env' })

const Blockchain = require('../src/blockchain')
const Wallet = require('../src/Wallet/Wallet')


const port = process.env.PORT || 3001


const yassine_coin = new Blockchain()
// const yassine = new Wallet()
// const hama = new Wallet()
// yassine_coin.AddBlock('hello from block two')
// yassine_coin.AddBlock('hello from block three')
// yassine_coin.createTransaction(yassine, hama, 150)

app.get('/', (req, res) => {
    const chain = JSON.stringify(yassine_coin, null, 4)
    res.send(chain)
})

app.get('/filter/:address', (req,res) => {
    const address = req.params
    const response = yassine_coin.chain.filter(adress => adress.data.fromAdress === address.address)
    res.send(JSON.stringify(response, null, 4))

})






app.listen(port, ()=>console.log('server starting'))