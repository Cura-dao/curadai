# CuraDAI (CURA)
> **[Contract address](https://etherscan.io/address/0x0a4b2d4b48a63088e0897a3f147ba37f81a27722) | [Token tracker](https://etherscan.io/token/0x0a4b2d4b48a63088e0897a3f147ba37f81a27722)**

Solidity repository for the CuraDAI (CURA) token, which is a digital currency that leverages the latest open financial tools built on blockchain technology to create a digital, stable and transparent currency that matches the local currency of Curaçao in terms of the unit of account. CuraDAI is 100% backed by Dai, a digital currency soft-pegged to the US Dollar.

* Standard: **ERC20**
* Name: **CuraDAI**
* Symbol: **CURA**
* Decimals: **18**

## Methodology

### mint()
``` 
function mint(uint256 _underlyingAmount) external returns(uint256)
```
CuraDAI is minted through transferring pre-approved DAI to the contract, the `msg.sender` must have a sufficient balance and allowance in association to the provided amount paramater. In return, DAI is pegged at an issue rate of 1 DAI per 1.78 CURA.

### burn()
```
function burn(uint256 _burnAmount) external returns(uint256) 
```

### pullSpread()
```
function pullSpread() external returns(uint256) 
```


