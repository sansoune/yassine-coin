const EC = require('elliptic').ec
const ec = new EC('secp256k1')
const SHA256 = require('crypto-js/sha256')

class Utils {
    static genKeyPair() {
        return ec.genKeyPair()
    }

    static hash(data) {
        return SHA256(JSON.stringify(data)).toString()
    }

    static verifySignature(pubKey, signature, datahash) {
        return ec.keyFromPublic(pubKey, 'hex').verify(datahash, signature)
    }
}

module.exports = Utils