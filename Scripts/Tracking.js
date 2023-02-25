//Import web3 library
const Web3 = require("web3")
//Set web3 provider (infura, quicknode, or another)
const web3 = new Web3("")

//Set contract address
const contractAddress = ""
//Set contract ABI
const contractABI = 
//Set chain id
const chainId = 56
//Set wallet private key ()
const privateKey = ''

const distContract = new web3.eth.Contract(contractABI, contractAddress)
const myDataForUsdt = distContract.methods.distributionUsdt().encodeABI()
const myDataForBusd = distContract.methods.distributionBusd().encodeABI()

module.exports = {
    checkBalance: checkBalance
}
checkBalance()
function checkBalance() {
    distContract.methods.getUsdtBalance().call(function (err, res) {
        if (err) {
            console.log("An error occurred", err)
            return
        }
        console.log("The USDT balance is: ", res)
       if (res > 0)
           distUsdt()
        else 
            checkBusdBalance()
    })
}

function checkBusdBalance() {
    distContract.methods.getBusdBalance().call(function (err, res) {
        if (err) {
            console.log("An error occurred", err)
            return
        }
        console.log("The BUSD balance is: ", res)
        if (res > 0)
          distBusd()
    })
}

async function distUsdt() {
    console.log("USDT transfer")
    var gasPrice
    web3.eth.getGasPrice(function (err, res) {
        gasPrice = res
        console.log(gasPrice)
    })
    var rawTx = {
        gasPrice: web3.utils.numberToHex(gasPrice),
        gasLimit: web3.utils.numberToHex(30000000),
        to: contractAddress,
        value: web3.utils.numberToHex(web3.utils.toWei("0", 'ether')),
        data: myDataForUsdt,
        chainId: chainId
    }

    web3.eth.accounts.signTransaction(rawTx, privateKey).then(RLPencodedTx => {
        web3.eth.sendSignedTransaction(RLPencodedTx['rawTransaction']).on('receipt', console.log)
    })
}

async function distBusd() {
    console.log("BUSD transfer")
    var gasPrice
    web3.eth.getGasPrice(function (err, res) {
        gasPrice = res
        console.log(gasPrice)
    })
    var rawTx = {
        gasPrice: web3.utils.numberToHex(gasPrice),
        gasLimit: web3.utils.numberToHex(30000000),
        to: contractAddress,
        value: web3.utils.numberToHex(web3.utils.toWei("0", 'ether')),
        data: myDataForBusd,
        chainId: chainId
    }

    web3.eth.accounts.signTransaction(rawTx, privateKey).then(RLPencodedTx => {
        web3.eth.sendSignedTransaction(RLPencodedTx['rawTransaction']).on('receipt', console.log)
    })
}