import 'react-native-gesture-handler';
import '@walletconnect/react-native-compat';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Web3Modal, wagmiConfig } from './src/web3modal';
import HomeNavigator from './src/navigation/HomeNavigator';
import darkTheme from './src/theme';

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <StatusBar style="auto" />
      <Web3Modal />

      <NavigationContainer theme={darkTheme}>
        <HomeNavigator />
        {/* TODO: WEBCOMPONENTS DONT WORK INSIDE REACT NAVIGATION CONTAINER? */}
        <w3m-button label="Outside HomeScreen" />
      </NavigationContainer>
    </WagmiConfig>
  );
}
