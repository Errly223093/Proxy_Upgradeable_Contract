const { ethers, upgrades } = require("hardhat");

const main = async () => {
  // 로직 컨트랙트 v1 을 배포.
  const logic_V1 = await ethers.getContractFactory("logic_contract_V1");

  // 로직 컨트랙트를 업그레이드 가능한 프록시로 배포한다. 배포와 동시에 initialze 함수를 call. val 상태변수의 초기값을 10으로 설정.
  const logic_V1s = await upgrades.deployProxy(logic_V1, [111], {
    initializer: "initialize",
  });

  console.log("Contract deployed");
};

main();
