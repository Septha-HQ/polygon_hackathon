import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "./tasks/accounts";
import * as dotenv from 'dotenv';
dotenv.config()

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL!;
const MUMBAI_CHAINID = 80001;
const PRIVATEKEY = process.env.PRIVATEKEY!;

const config: HardhatUserConfig = {
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATEKEY],
      chainId: MUMBAI_CHAINID,
    }
  },
  solidity: "0.8.17",
};

export default config;
