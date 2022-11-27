import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

task("accounts", "Prints the list of accounts").setAction(
    async (taskArguments, hre, runSuper) => {
      // console.log('task Arguments are: ', taskArguments);
      const accounts = await hre.ethers.getSigners();
  
      for (const account of accounts) {
        const balance = await hre.ethers.provider.getBalance(account.address)
        console.log(
          `${account.address}: ${hre.ethers.utils.formatEther(balance)} ETH`
        );
        ;
      }
    });