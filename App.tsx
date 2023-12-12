import './polyfills';
import 'react-native-gesture-handler';

import React from 'react';
import { WagmiConfig } from 'wagmi';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Web3Modal, wagmiConfig } from './src/lib/web3modal';
import RootNavigator from './src/lib/navigation/RootNavigator';
import { reactNavigationTheme } from './src/lib/theme';
import { LensProvider, lensConfig } from './src/lib/lens-sdk';

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <LensProvider config={lensConfig}>
        <StatusBar style="auto" />
        <Web3Modal />

        <SafeAreaProvider>
          <NavigationContainer theme={reactNavigationTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </LensProvider>
    </WagmiConfig>
  );
}
