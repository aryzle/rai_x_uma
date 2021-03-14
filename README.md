# RAI x UMA Challenge
Project for bounty https://gitcoin.co/issue/reflexer-labs/geb/97/100024834

## References

### RAI

* OracleRelayer source https://github.com/reflexer-labs/geb/blob/master/src/OracleRelayer.sol
* OracleRelayer docs https://docs.reflexer.finance/system-contracts/oracle-module/oracle-relayer

### UMA

#### Setup and Minting a Synthetic token

* Setup https://docs.umaproject.org/developers/setup
* Local testing https://docs.umaproject.org/build-walkthrough/mint-locally
* EMP deployment https://docs.umaproject.org/developers/emp-deployment
* EMP docs https://docs-dot-uma-protocol.appspot.com/uma/contracts/ExpiringMultiParty.html
* EMP launcher https://github.com/UMAprotocol/launch-emp

## Code

https://github.com/aryzle/protocol/tree/as/rai_redemption_rate_feed

Unit tests included.

## Deployment

After talking to the UMA developers in their Discord, a Kovan Rai Price Identifier was added [here](https://thegraph.com/explorer/subgraph/umaprotocol/uma-kovan?query=Pricefeed%20Identifiers) and RAI was added as collateral [here](https://thegraph.com/explorer/subgraph/umaprotocol/uma-kovan?query=Whitelisted%20Collateral%20Currencies).
Afterwards I deployed an UMA EMP targeting `RaiRedemptionRate` to the Kovan network.

#### Collateral name
```
        "address": "0x76b06a2f6df6f0514e7bec52a9afb3f603b477cd",
        "decimals": 18,
        "isOnWhitelist": true,
        "name": "Rai Reflex Index",
        "symbol": "RAI"
```
#### Price feed name
```
"id": "RaiRedemptionRate",
```

#### Synth name
```
    syntheticName: "Test RAI Token",
    syntheticSymbol: 'RAITEST',
```

### EMP deployment

The EMP was deployed to the Kovan network using the `launch-emp` repo provided by UMA. The input parameters to their script is in index.js.

Deployed at

https://kovan.etherscan.io/address/0x6a2CCA42EE473757f3cdB101474cba7050F08eB2


### EMP minting

https://docs.umaproject.org/build-walkthrough/minting-etherscan

100 RAITEST coins were minted using 1 WETH as collateral.

Miniting transaction:

https://kovan.etherscan.io/tx/0xe484c70161ab4d6a6861779c2d4360fb5ac088f1011316648c9dff3366eeadaa
