# Tracking non-native tokens balance

<p align="center">
   <img src="https://img.shields.io/badge/npm-9.4.0-blue" alt="License">
   <img src="https://img.shields.io/badge/Cron-2.3.0-orange" alt="License">
   <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

## About

Greetings!  
You are presented with a script that tracks the balance of native tokens on a smart contract or wallet. When a token is detected, it sends it to the address you specified. The script can be used to forward payouts and other tasks.The cron library is used to loop the balance check. See below how to install the library.

The Tracking script is responsible for tracking the balance and calling functions from the contract.  
The cron script is responsible for repeating the balance check with the Tracking script

## Using

Before using the script, you need to install the web3 and cron libraries.  
### Web3
`npm install web3` for npm  
`yarn add web3` for yarn  
You can find detailed information in the [official web3 documentation](https://web3js.readthedocs.io/en/v1.2.7/getting-started.html)

### Cron
`npm i cron` for npm  
You can find detailed information in the [official npm documentation](https://www.npmjs.com/package/cron)

For continuous operation, you need to place the script on the host or use it on a computer that is always on.  
In the scripts, a comment is written under each command to understand how the code works. Some comments have a "!!!" sign, which means that in the line below, you need to enter some personal data (address, key, parameters).

After filling in all the necessary fields and setting the necessary parameters, you just need to run the Tracking script for one-time tracking, and the Cron script to run a cyclic check.
________________________
Later I will add autoplay of the code in case of errors.
________________________
### Thanks for watching!

## Developers

[dimokrit](https://github.com/dimokrit)  
[Aar0nWalker](https://github.com/Aar0nWalker)

## License

Project is distributed under the MIT license.
