# web3-cross-platform-dapp

This repository showcases how to build a modern cross-platform dApp with [Expo](https://expo.dev), [wagmi](https://wagmi.sh) and [WalletConnect's Web3Modal](https://docs.walletconnect.com/web3modal/about)

![demo.gif](demo.gif)

## Requirements

- [Expo environment setup](https://docs.expo.dev/get-started/installation/#requirements) (Node.js, Git, Watchman)
- A [Wallet Connect Cloud](https://cloud.walletconnect.com/sign-in) project ID
- Expo Go app installed in your smartphone
- One or more web3 wallets installed in your smartphone (e.g. MetaMask, Rainbow Wallet, Trust Wallet, etc)

## How to run

- Rename `.env.example` to `.env` and fill in your Wallet Connect Cloud project ID, and Alchemy API key
- `npm start`
- Open Expo Go app in your smartphone
- If your smartphone is in the same network as your computer, the local dev server should appear as the first option. If it doesn't, use the app to scan the QR Code presented in the terminal
