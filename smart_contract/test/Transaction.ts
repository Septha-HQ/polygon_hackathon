import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { Transaction } from "../typechain-types";
import { Signer } from "ethers";

describe("Transaction", function () {

  let owner: Signer, user: Signer;
  let transaction: Transaction;

  const NGN_SYM = "NGN"
  const NGN_RATE = 77398000000;


  const AMOUNT = 500;
  const REF = "08011111111"
  const CAT = 0

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();

    const Transaction = await ethers.getContractFactory('Transaction');
    transaction = await Transaction.deploy();
  })

  describe("Rate", () => {
    it("Should fail to update rate if not owner", async () => {
      // Should revert update with error unauthorized
      await expect(transaction.connect(user).setRate(NGN_SYM, NGN_RATE))
        .to.be.revertedWith('Unauthorized');

      // Should not update the rate
      const rate = await transaction.connect(user).dollarRate(NGN_SYM);
      expect(rate).to.be.equal(0)
    })

    it("Set rate if owner", async () => {
      await transaction.connect(owner).setRate(NGN_SYM, NGN_RATE);
      const rate = await transaction.connect(user).dollarRate(NGN_SYM);

      expect(rate).to.be.equal(NGN_RATE);
    });
  });


  describe("Balance", async () => {
    it("Should fail to view balance if not user", async () => {
      await expect(transaction.connect(user).getBalance())
        .to.be.revertedWith("Unauthorized")
    });

    it("Should view balance if user", async () => {
      const balance = await transaction.connect(owner).getBalance();
      expect(balance).to.be.equal(0)
    });
  })

  describe("Pay", () => {
    describe("Pay without currency set", () => {
      const zero: BigNumber = ethers.constants.Zero

      it("Should fail if currency is not set", async () => {

        await expect(transaction.connect(user).pay(NGN_SYM, AMOUNT, REF, CAT))
          .to.be.revertedWith("Currency rate not available");

        const txncount = await transaction.connect(user).txnCount();
        expect(txncount).to.be.equal(0);
      });
    });

    describe("Pay with currency set", async () => {
      let userBalance: BigNumber;
      let matic: BigNumber;

      beforeEach(async () => {
        userBalance = await user.getBalance();
        await transaction.connect(owner).setRate(NGN_SYM, NGN_RATE);
        matic = await transaction.connect(owner).amountToPay(NGN_SYM, AMOUNT);

        await transaction.connect(user).pay(NGN_SYM, AMOUNT, REF, CAT, {
          value: matic
        })
      });

      it("Should transfer matic equivalent", async () => {
        const currentBalance = await user.getBalance();
        expect(currentBalance).to.be.lessThanOrEqual(userBalance.sub(matic))
      });

      it("Should update transactions", async () => {
        const userAccount = await transaction.connect(user).getTxn();
        expect(userAccount.length).to.be.greaterThan(0);
      });

      it("Should increment transactions count", async () => {
        const txncount = await transaction.connect(user).txnCount();
        expect(txncount).to.be.equal(1)
      });

      it("Should increase balance by amount", async () => {
        const balance = await transaction.connect(owner).getBalance();
        expect(balance).to.be.equal(matic)
      });
    })

  })


  describe("Withdrawal", function () {
    let userBalance: BigNumber;
    let matic: BigNumber;

    beforeEach(async () => {
      userBalance = await user.getBalance();
      await transaction.connect(owner).setRate(NGN_SYM, NGN_RATE);
      matic = await transaction.connect(owner).amountToPay(NGN_SYM, AMOUNT);

      await transaction.connect(user).pay(NGN_SYM, AMOUNT, REF, CAT, {
        value: matic
      })
    });

    it("Should fail to withdraw if not owner", async () => {
      await expect(transaction.connect(user).withdraw()).to.be.revertedWith("Unauthorized")
    });

    it("Should withdraw if owner", async () => {
      await transaction.connect(owner).withdraw();

      expect(await transaction.connect(owner).getBalance()).to.be.equal(0);
    });
  });
});
