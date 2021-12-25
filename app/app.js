const express = require('express')
const app = express()
require('dotenv').config()

const Blockchain = require('../src/blockchain')

const port = process.env.PORT || 3001

const yassine_coin = new Blockchain()

app.get('/', (req, res) => {
    res.json(yassine_coin)
})






app.listen(port, ()=>console.log('server starting'))