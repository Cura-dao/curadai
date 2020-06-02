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
CuraDAI is minted through transferring pre-approved DAI to the contract, the `msg.sender` must have a sufficient balance and allowance in relation to the provided amount parameter. In return, DAI is pegged at an issue rate of 1 DAI per 1.78 CURA.

### burn()
```
function burn(uint256 _burnAmount) external returns(uint256)
```
CuraDAI is burned out of circulation by transferring pre-approved CURA to the contract, the `msg.sender` must have a viable balance and allowance in accordance to the provided amount. CURA is then destroyed at an burn rate of 1 CURA per 1.75 DAI.

### pullSpread()
```
function pullSpread() external returns(uint256) 
```
The difference between issueing (1.78) and destroying (1.75), gives the asset a spread of **≈ 1.685%**, which is funnelled to the beneficiary, which in this utility is the [CuraDAO contract](https://etherscan.io/address/0x0b93ba560283350d4216f29dc57e15df38d0eace) to proactively reinvest back into the island's economy. 


