import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAccount } from 'wagmi';
import { LensButton } from '../../components/LensButton';
import Text from '../../components/Text';

export default function SignInScreen() {
  const { isConnected } = useAccount();

  return (
    <View style={styles.container}>
      {isConnected ? <LensButton /> : <Text>Connect wallet to start</Text>}
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
