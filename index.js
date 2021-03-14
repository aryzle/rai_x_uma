const constructorParams = {
	expirationTimestamp: "1706780800",
	collateralAddress: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
	priceFeedIdentifier: web3.utils.padRight(web3.utils.fromAscii("RaiRedemptionRate")),
	syntheticName: "Test RAI Token",
	syntheticSymbol: "RAITEST",
	collateralRequirement: { rawValue: web3.utils.toWei("1.05") }, // lowered this from 125% since stable
	disputeBondPercentage: { rawValue: web3.utils.toWei("0.1") },
	sponsorDisputeRewardPercentage: { rawValue: web3.utils.toWei("0.1") },
	disputerDisputeRewardPercentage: { rawValue: web3.utils.toWei("0.1") },
	minSponsorTokens: { rawValue: web3.utils.toWei("100") },
	withdrawalLiveness: 7200,
	liquidationLiveness: 7200,
	excessTokenBeneficiary: '0x41AF40Eb92Bec4dD8DA77103597838b3dBBD3B6f',
	financialProductLibraryAddress: '0x0000000000000000000000000000000000000000',
}
