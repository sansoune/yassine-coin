const Utils = require("./Wallet/Utils")


class Transaction {
    constructor(fromAdress, toAdress, amount){
        this.fromAdress = fromAdress.publicKey
        this.toAdress = toAdress.publicKey
        this.amount = amount
    }

    signTransaction(transaction, senderWallet) {
        transaction.input = {
          timestamp: Date.now(),
          amount: this.amount,
          address: this.fromAdress,
          signature: senderWallet.sign(Utils.hash(transaction.outputs))
        }
      }
    
}


module.exports = Transaction