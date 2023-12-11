import React from 'react';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react';
import { chains, metadata, projectId } from './common';

// Create Wagmi config
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// Init Web3Modal Web SDK
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

// Standardize the web button component to be used the same as the native button
const W3mButton = props => <w3m-button {...props} />;

// On web, modal doesn't need to be rendered because it's a globally-available web component
const Web3Modal = () => null;

// Re-export components
export { wagmiConfig, useWeb3Modal, W3mButton, Web3Modal };
