const Utils = require("./Utils");

class Wallet {
    constructor() {
        this.keyPair = Utils.genKeyPair()
        this.publicKey = this.keyPair.getPublic('hex')
        this.privateKey = this.keyPair.getPrivate('hex')
    }

    print() {
        console.log(this.publicKey)
        console.log(this.privateKey)
    }

    sign(dataHash) {
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet