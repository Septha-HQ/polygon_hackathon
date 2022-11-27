import { HardhatUserConfig } from "hardhat/config";
import "./tasks/accounts"
import * as dotenv from 'dotenv'
dotenv.config()

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const PRIVATEKEY1 = process.env.PRIVATEKEY1!;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATEKEY1],
      chainId: 80001,
    }
  },
  solidity: "0.8.17",
};

export default config;
