import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "./tasks/accounts";
import * as dotenv from 'dotenv';
dotenv.config()

<<<<<<< HEAD
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
=======
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
>>>>>>> staging-mumbai
    }
  },
  solidity: "0.8.17",
};

export default config;
