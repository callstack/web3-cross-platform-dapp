// ⚠️ Important: `@walletconnect/react-native-compat` needs to be imported before other `wagmi` packages.
// This is because Web3Modal has a polyfill necessary for the TextEncoder API.
import '@walletconnect/react-native-compat';
import 'react-native-gesture-handler';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Web3Modal, wagmiConfig } from './src/web3modal';
import RootNavigator from './src/navigation/RootNavigator';
import darkTheme from './src/theme';

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <StatusBar style="auto" />
      <Web3Modal />

      <NavigationContainer theme={darkTheme}>
        <RootNavigator />
      </NavigationContainer>
    </WagmiConfig>
  );
}
