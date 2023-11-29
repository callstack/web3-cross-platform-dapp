import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useAccount, useSignMessage } from 'wagmi';
import Text from '../../components/Text';
import { theme } from '../../theme';
import NftList from './NftList';

export default function HomeScreen() {
  const { isConnected } = useAccount();
  const { isSuccess: isSigned, signMessage } = useSignMessage({
    message: 'Sign this message to prove you are the owner of this wallet',
  });

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text>Connect wallet to display NFTs</Text>
      </View>
    );
  }

  if (!isSigned) {
    return (
      <View style={styles.container}>
        <Button
          title="Sign Message"
          color={theme.colors.primary}
          onPress={() => signMessage()}
        />
      </View>
    );
  }

  return <NftList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
