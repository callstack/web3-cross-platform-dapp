import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  W3mButton,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import { chains, metadata, projectId } from './common';

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export { wagmiConfig, useWeb3Modal, W3mButton, Web3Modal };
