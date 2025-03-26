import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "dotenv/config";

export default {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
