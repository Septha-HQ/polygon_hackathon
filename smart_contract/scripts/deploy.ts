import { ethers } from "hardhat";

const main = async () => {
  const Transaction = await ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log(`Transaction deployed to ${transaction.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

runMain();
