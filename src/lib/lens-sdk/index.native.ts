import {
  LensProvider,
  LensConfig,
  development,
} from '@lens-protocol/react-native';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
  // On web, AsyncStorage will fallback to localStorage
  // TODO: Check if security is an issue - IDEA: SecureStorage
  storage: AsyncStorage,
};

export { LensProvider, lensConfig };
