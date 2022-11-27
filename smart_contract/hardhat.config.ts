import { HardhatUserConfig } from "hardhat/config";
import "./tasks/accounts"
import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    }
  },
  solidity: "0.8.17",
};

export default config;
