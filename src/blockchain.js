const Block = require('./block')

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()]
    }

    AddBlock(data) {
        const lastBlock = this.chain[this.chain.length-1]
        const block = Block.mineBlock(lastBlock, data)
        this.chain.push(block)

        return block
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction)
        this.AddBlock(transaction)
        const newBlenceReciver = this.getBalence(transaction.toAdress) + transaction.amount
        const newBalenceSender = this.getBalence(transaction.fromAdress) - transaction.amount
        console.log(newBalenceSender)
        this.AddBlock({adress: transaction.toAdress, balence: newBlenceReciver})
        this.AddBlock({adress: transaction.fromAdress, balence: newBalenceSender})
    }

    getBalence(address) {
        let balence = 0
        const amount = this.chain.filter(adress => adress.data.adress === address)
        if(amount[0] === undefined){
             balence = 0
             console.log('done')
        }else {
            const baleence = amount[amount.length-1].data.balence
            balence = baleence
            
        }
        return balence
    }
}


module.exports = Blockchain