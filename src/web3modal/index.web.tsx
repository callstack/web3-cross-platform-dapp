import React from 'react';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react';
import { chains, metadata, projectId } from './common';

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

const W3mButton = () => <w3m-button />;

const Web3Modal = () => null;

export { wagmiConfig, useWeb3Modal, W3mButton, Web3Modal };
