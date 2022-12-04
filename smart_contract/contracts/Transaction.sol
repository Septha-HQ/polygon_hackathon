// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Transaction {
    AggregatorV3Interface internal priceFeed;
    address payable public owner;
    uint public txnCount;
    mapping(string => uint256) public dollarRate; //scaled to 10^8

    constructor() {
        owner = payable(msg.sender); //set owner

        // Polygon Mumbai testnet
        // Get MATIC/USD pricefeed from chainlink
        priceFeed = AggregatorV3Interface(
            0xAB594600376Ec9fD91F8e885dADF0CE036862dE0
        );
    }

    enum Category {
        Airtime,
        GiftCard,
        UtilityBill
    }

    struct Txn {
        string currency;
        uint256 amount;
        uint256 matic; //MATIC equivalent for both amount and fee
        string ref;
        Category category;
        uint256 timestamp;
    }

    // Transaction mapping
    mapping(address => Txn[]) public accountTxn;

    // Modifier to limit some function to the owner of the contract
    modifier isOwner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    /**
     * Set the dollar rate of the currency
     * To accomodate float, rate is scaled to 10^8
     * That is, if NGN 778 = USD 1 it will be represented as 778*10^8
     */
    function setRate(string memory _curr, uint256 _rate) public isOwner {
        dollarRate[_curr] = _rate;
    }

    // Get latest MATIC price from chainlink
    function getMaticPrice(uint256 cost) public view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();

        return (cost * 1e18) / uint256(price);
    }

    // Get all transcation for a particular account
    function getTxn() public view returns (Txn[] memory) {
        Txn[] memory _addressTxn;
        _addressTxn = accountTxn[msg.sender];
        return _addressTxn;
    }

    // update the account transaction
    function addTxn(address _address, Txn memory _txn) private {
        accountTxn[_address].push(_txn);
        txnCount += 1;
    }

    // Get the matic equivalent of local currency
    function amountToPay(
        string memory _curr,
        uint _amount
    ) public view returns (uint256) {
        // Scaled the amount to 10^18 and add 1% transaction fee
        uint256 _scaledAmount = ((_amount * 1e16) * 101) / 100;

        // convert dollar to matic
        uint256 _amountUsd = _scaledAmount / dollarRate[_curr];

        // Get matic equivalent
        return getMaticPrice(_amountUsd);
    }

    // Handle the transfer of funds
    function pay(
        string memory _curr,
        uint256 _amount,
        string memory _ref,
        Category _category
    ) public payable {
        // requires rate of the currency to be set first
        require(dollarRate[_curr] != 0, "Currency rate not available");

        uint256 _matic = amountToPay(_curr, _amount);

        Txn memory _txn;

        _txn.currency = _curr;
        _txn.amount = _amount;
        _txn.matic = _matic;
        _txn.ref = _ref;
        _txn.category = _category;
        _txn.timestamp = block.timestamp;

        require(msg.value == _matic, "Transfer FAILED, value incorrect");

        addTxn(msg.sender, _txn);
    }

    // Get the contract balance
    function getBalance() public view isOwner returns (uint) {
        return address(this).balance;
    }

    // Withdraw by owner
    function withdraw() public payable isOwner returns (bool) {
        (bool status, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");

        require(status, "withdraw Successful");

        return status;
    }
}
