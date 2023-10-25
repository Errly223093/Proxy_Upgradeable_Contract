const { ethers, upgrades } = require("hardhat");

const proxy = "0x0570522F4cae654Ca90476660965eCB489C4d2c7";

const main = async () => {
  // 로직 컨트랙트 v2 를 contractFactory 로 변환.
  const logic_V2 = await ethers.getContractFactory("logic_Version_2");

  // 로직 컨트랙트를 업그레이드 함.
  await upgrades.upgradeProxy(proxy, logic_V2);

  console.log("Contract upgraded.");
};

main();
