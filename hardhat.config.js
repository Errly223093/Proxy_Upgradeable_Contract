require("@nomicfoundation/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const pvkey = "Your PVT KEY";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/Your INFURA API KEY`,
      accounts: [pvkey],
    },
  },
  etherscan: {
    apiKey: "Your Etherscan API KEY",
  },
};
