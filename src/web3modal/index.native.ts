import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  W3mButton,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import { chains, metadata, projectId } from './common';

// Create Wagmi config
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// Init Web3Modal RN SDK
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

// Re-export components
export { wagmiConfig, useWeb3Modal, W3mButton, Web3Modal };
