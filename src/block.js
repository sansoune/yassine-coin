const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(timestamp, lastHash, Hash, data) {
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.Hash = Hash
        this.data = data
    }

    tostring(){
        return `Block - 
        Timestamp: ${this.timestamp}
        last hash: ${this.lastHash}
        hash     : ${this.Hash}
        data     : ${this.data}`
    }

    static genesis() {
        return new this('genesis time', '000000000', 'the first block', [])
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now()
        const lasthash = lastBlock.Hash
        const hash = Block.hash(timestamp, lasthash, data)

        return new this(timestamp, lasthash, hash, data)
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }
}

module.exports = Block