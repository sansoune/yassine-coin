const Blockchain = require('../src/blockchain')
const Block = require('../src/block')
const Wallet = require('../src/Wallet/Wallet')
const Transaction = require('../src/transaction')



const yassine_coin = new Blockchain()

yassine_coin.AddBlock("hello from block two")
yassine_coin.AddBlock('hello from block three')


const yassine = new Wallet()

const status = yassine_coin.isValidChain()
setInterval(() => {
  // yassine_coin.isValidChain()
  console.log('hi')
}, 1000)
while (status != true) {
  console.log(false)
}
yassine.print()
yassine_coin.createTransaction(new Transaction(yassine.publicKey, 'hama', 50))
yassine_coin.createTransaction(new Transaction('blockchain', yassine.publicKey, 150))
yassine_coin.createTransaction(new Transaction(yassine.publicKey, 'hama', 50))
console.log(yassine_coin.chain[0])
console.log(yassine_coin.getBalence(yassine.publicKey))
console.log(yassine_coin.getBalence('hama'))
console.log(status)
yassine_coin.chain[1].data = 'hello mother fucker'

console.log(status)