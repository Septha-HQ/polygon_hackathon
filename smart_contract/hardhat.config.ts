import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "./tasks/accounts";
import * as dotenv from 'dotenv';
dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    localhost_test: {
      url: "http://127.0.0.1:8545/",
      chainId: 1337,
    }
  },
  solidity: "0.8.17",
};

export default config;
