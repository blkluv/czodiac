const hre = require("hardhat");
const loadJsonFile = require("load-json-file");
const {
  czDeployer,
  pancakeswapRouter,
  zeroAddress,
  BELT,
  beltFarm,
  czf,
  Belt4LP,
  Belt4,
  busd,
  belt4BeltPoolId,
  czusd,
  czusdBusdPairPCS,
  pcsFeeBasis,
  ellipsisV2BasePool,
  ellipsisV2BasePoolToken,
  ellipsisV2Czusd3psPool,
  ellipsisV2Czusd3psPoolToken
} = require("../deployConfig.json");

const {ethers} = hre;
const {parseEther} = ethers.utils;

async function main() {
  let czusdSc = await ethers.getContractAt("CZUsd", czusd);
  let czusdBusdPairPCSSc = await ethers.getContractAt("IAmmPair", czusdBusdPairPCS);
  let czfBeltVault =  await ethers.getContractAt("CzfBeltVault", "0xceE0C6a66df916991F3C730108CF8672157380b7");

  const CZVPegV2 = await ethers.getContractFactory("CZVPegV2");
  const czvPegV2 = await CZVPegV2.deploy(
      Belt4LP,
      Belt4,
      busd,
      czfBeltVault.address,
      czusd,
      ellipsisV2BasePool,
      ellipsisV2BasePoolToken,
      ellipsisV2Czusd3psPool,
      czf,
      pancakeswapRouter,
      czusdBusdPairPCS,
      pcsFeeBasis
    );
    await czvPegV2.deployed();
    console.log("CZVPegV2 deployed to:", czvPegV2.address);


  let tx = await czusdSc.grantRole(ethers.utils.id("MINTER_ROLE"), czvPegV2.address);
  await tx.wait();
  console.log("Complete");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
