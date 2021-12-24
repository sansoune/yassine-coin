const Blockchain = require('../src/blockchain')
const Block = require('../src/block')

describe('Blockchain', () => {
    let bc

    beforeEach(() => {
        bc = new Blockchain()
    })

    it('starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    it('adds a new block', () => {
        const data = "foo"
        bc.AddBlock(data)

        expect(bc.chain[bc.chain.length-1].data).toEqual(data)
    })

    it('is valid chain', () => {
        const status = bc.isValidChain()
        expect(status).toEqual(true)
    })

    it('is not valid chain', () => {
        bc.chain[0].data = 'hello world'
        const status = bc.isValidChain()
        expect(status).toEqual(false)
    })

})