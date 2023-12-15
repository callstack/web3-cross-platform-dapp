import { LensConfig, development } from '@lens-protocol/react-native';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import * as SecureStore from 'expo-secure-store';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  // Use `development` or `production` depending on your need
  environment: development,
  storage: {
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  },
};

export * from '@lens-protocol/react-native';
export { lensConfig };
