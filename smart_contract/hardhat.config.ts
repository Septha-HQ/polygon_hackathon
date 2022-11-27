import { HardhatUserConfig } from "hardhat/config";
import "./tasks/accounts"
import * as dotenv from 'dotenv'
dotenv.config()

const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const POLYGON_CHAINID = 137;
const PRIVATEKEY = process.env.PRIVATEKEY!;


const config: HardhatUserConfig = {
  defaultNetwork: "polygon",
  networks: {
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATEKEY],
      chainId: POLYGON_CHAINID,
    }
  },
  solidity: "0.8.17",
};

export default config;
