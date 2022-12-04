# Septha

![Septha](https://raw.githubusercontent.com/Septha-HQ/polygon_hackathon/main/web/src/assets/septha.jpg)

Easily pay for things using web3

## Problem

Liquidity has been an issue for most people with crypto-assets. And most times, to pay for commodity, one has to convert to fiat currency first before paying for the product or services. These tends to lead to longer time and more money lost due to the multiple parties involved.

## Solution

We want to shorten the transaction gap between a crypto-assets holder and everyday commodity. By providing a platform where people can pay for thing using their crypto assets directly.

## Project Structure

This is a test project on the Mumbai testnet on the Polygon Network. The project is divided into 3 different applications.

- [Figma design](https://www.figma.com/file/lnd3jqJWfPpUfuLI13fzEa/Septha?node-id=620%3A66&t=0e3kQ80qwvsN2UdI-3)
- [Frontend (Web)](https://github.com/Septha-HQ/polygon_hackathon/tree/main/web)
- [Smart contract](https://github.com/Septha-HQ/polygon_hackathon/tree/main/smart_contract)
- [Backend](https://github.com/Septha-HQ/polygon_hackathon/tree/main/backend)

#### Frontend
The user interface to interact with the smart contract in a fun way. The web application is built with ReactJS.
- Reactjs
- Context
- React Router Dom
- Typescript
- Vite
- Material UI (MUI)

#### Smart contract

The project is built on the Mumbai Network (A polygon test net). Some of the functions include:

- Check for currency price
- Pay for transaction
- View user transacation
- Update currency rate (owner)
- Withdraw (owner)

Technology used are:

- Solidity
- Hardhat
- Chainlink pricefeed

[Test](https://github.com/Septha-HQ/polygon_hackathon/tree/main/smart_contract/coverage): The smart contract code has a 100% test coverage that cover most scenerio for the features

#### Backend

The backend is to connect the application to 3rd party service providers and it is built with Django. This part of the project was not implemented in the Polygon Hackathon.

- Python
- Django

## License
The version is licensed under MIT