const Block = require('./block')
const Transaction = require('./transaction')


class Blockchain {
    constructor() {
        this.chain = [Block.genesis()]
        this.pendingTransactions = []
    }

    AddBlock(data) {
        const lastBlock = this.chain[this.chain.length-1]
        const block = Block.mineBlock(lastBlock, data)
        this.chain.push(block)

        return block
    }
    isValidChain() {
        if(JSON.stringify(this.chain[0]) !== JSON.stringify(Block.genesis())) return false;
    
        for (let i=1; i<this.chain.length; i++) {
          const block = this.chain[i];
          const lastBlock = this.chain[i-1];
    
          if (block.lastHash !== lastBlock.Hash ||
              block.Hash !== Block.blockHash(block)) {
            return false;
          }
        }
        
        return true;
    }

    createTransaction(sender, recepiant, amount) {
        const transaction = new Transaction(sender, recepiant, amount)
        this.pendingTransactions.push(transaction)
        this.AddBlock(transaction)
        const newBlenceReciver = this.getBalence(transaction.toAdress) + transaction.amount
        const newBalenceSender = this.getBalence(transaction.fromAdress) - transaction.amount
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