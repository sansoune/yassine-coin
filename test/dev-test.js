const Blockchain = require('../src/blockchain')
const Block = require('../src/block')
const Wallet = require('../src/Wallet/Wallet')
const Transaction = require('../src/transaction')



// const yassine_coin = new Blockchain()

// yassine_coin.AddBlock("hello from block two")
// yassine_coin.AddBlock('hello from block three')

const yassine = new Wallet()
const hama = new Wallet()


// yassine.print()
// yassine_coin.createTransaction(new Transaction(yassine.publicKey, 'hama', 50))
// yassine_coin.createTransaction(new Transaction('blockchain', yassine.publicKey, 150))
// yassine_coin.createTransaction(new Transaction(yassine.publicKey, 'hama', 50))
// console.log(yassine_coin.chain[0])
// console.log(yassine_coin.getBalence(yassine.publicKey))
// console.log(yassine_coin.getBalence('hama'))


console.log(new Transaction(yassine, hama, 50))

