const input = document.getElementById('data').value
const button = document.getElementById('submit')
// const yassine_coin = require('./dev-test')

button.onclick(() => {
    yassine_coin.AddBlock(input)
})