//Import web3 library
const Web3 = require("web3")
//Set web3 provider (infura, quicknode, or another)
const web3 = new Web3("")

//Set address, whose balance you want to track
const trackingAddress = ""
//Set address, that will receive the token
const receiverAddress = ""
//Set token contract address
const contractAddress = ""
//Set token contract ABI
const contractABI = 
//Set current chain id
const chainId = 
//Set wallet private key ()
const privateKey = ''

//Set token contract from address and ABI
const tokenContract = new web3.eth.Contract(contractABI, contractAddress)

//Export checkBalance function
module.exports = {
    checkBalance: checkBalance
}

//Call checkBalance function
checkBalance()

function checkBalance() {
    //Call balanceOf function of token smart contract, to find out the balance
    tokenContract.methods.balanceOf(trackingAddress).call(function (err, res) {
        if (err) {
            console.log("An error occurred", err)
            return
        }

        console.log("The token balance is: ", res)
        //If address has tokens, send it
        if (res > 0)
            sendToken(res)          
    })
}

async function sendToken(amount) {
    //Check current gas price
    var gasPrice
    web3.eth.getGasPrice(function (err, res) {
        gasPrice = res
        console.log(gasPrice)
    })

    //Set data for transaction (call contract function encoded to ABI), in this case is transfer function
    const trxData = tokenContract.methods.transfer(receiverAddress, amount).encodeABI()

    //Set transaction
    var rawTx = {
        gasPrice: web3.utils.numberToHex(gasPrice),
        gasLimit: web3.utils.numberToHex(30000000),
        to: contractAddress,
        value: web3.utils.numberToHex(web3.utils.toWei("0", 'ether')),
        data: trxData,
        chainId: chainId
    }

    //Sign transaction, and then send this transaction
    web3.eth.accounts.signTransaction(rawTx, privateKey).then(RLPencodedTx => {
        web3.eth.sendSignedTransaction(RLPencodedTx['rawTransaction']).on('receipt', console.log)
    })
}
