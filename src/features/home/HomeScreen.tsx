import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAccount } from 'wagmi';
import Text from '../../components/Text';

export default function HomeScreen() {
  const { isConnected } = useAccount();

  return (
    <View style={styles.container}>
      {isConnected ? (
        <View />
      ) : (
        <Text>Connect your wallet to display NFTs</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
