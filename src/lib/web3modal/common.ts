import { arbitrum, mainnet, polygon, polygonMumbai } from 'viem/chains';
import Constants from 'expo-constants';

const projectId =
  Constants.expoConfig.extra.EXPO_PUBLIC_WALLETCONNECT_CLOUD_PROJECT_ID;

const metadata = {
  name: 'Web3Modal cross-platform',
  description: 'Web3Modal RN + web cross-platform example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const chains = [mainnet, polygon, polygonMumbai, arbitrum];

export { projectId, metadata, chains };
