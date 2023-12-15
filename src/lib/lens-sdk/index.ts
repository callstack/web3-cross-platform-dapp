import { LensConfig, development } from '@lens-protocol/react-native';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  // Use `development` or `production` depending on your need
  environment: development,
  // TODO: Check if security is an issue - IDEA: SecureStorage
  storage: AsyncStorage,
};

export * from '@lens-protocol/react-native';
export { lensConfig };
