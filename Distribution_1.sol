// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Distribution_1 {
    IERC20 tokenUsdt;// Token USDT interface
    IERC20 tokenBusd;

    address addressUsdt = 0x55d398326f99059fF775485246999027B3197955;
    address addressBusd = 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56;

    address receiver1 = 0xe543EAa46808a114E91b3A5Be604bE8003983885;
    address receiver2 = 0x32B61eB27E47378dfD6AF1CBEAAe160056cDbD70;

    address owner;
    constructor() {
        tokenUsdt = IERC20(addressUsdt);
        tokenBusd = IERC20(addressBusd);
    }

    function distributionUsdt() external {
        uint balanceUsdt = tokenUsdt.balanceOf(address(this));

        uint amount1 = balanceUsdt/2;
        uint amount2 = balanceUsdt % 2 > 0 ? balanceUsdt/2 + 1: balanceUsdt/2;

        tokenUsdt.transfer(receiver1, amount1);
        tokenUsdt.transfer(receiver2, amount2);
    }

    function distributionBusd() external {
        uint balanceUsdt = tokenBusd.balanceOf(address(this));

        uint amount1 = balanceUsdt/2;
        uint amount2 = balanceUsdt % 2 > 0 ? balanceUsdt/2 + 1 : balanceUsdt/2;

        tokenBusd.transfer(receiver1, amount1);
        tokenBusd.transfer(receiver2, amount2);
    }

    function getUsdtBalance() external view returns (uint balance_USDT) {
        return(tokenUsdt.balanceOf(address(this)));
    }

    function getBusdBalance() external view returns (uint balance_BUSD) {
        return(tokenBusd.balanceOf(address(this)));
    }
}