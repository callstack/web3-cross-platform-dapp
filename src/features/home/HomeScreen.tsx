import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
  useAccount,
  useBalance,
  useBlockNumber,
  useFeeData,
  useNetwork,
  usePrepareSendTransaction,
  useSendTransaction,
  useSignMessage,
  useWaitForTransaction,
} from 'wagmi';
import { parseEther } from 'viem';
import { polygonMumbai } from 'wagmi/chains';
import { W3mButton, useWeb3Modal } from '../../web3modal';

export default function HomeScreen() {
  const { open } = useWeb3Modal();

  // const { chain } = useNetwork();
  // const { data: blockNumber } = useBlockNumber();
  // const { data: feeData } = useFeeData({
  //   chainId: chain?.id,
  //   formatUnits: 'ether',
  // });
  // const { address, isConnected } = useAccount();
  // const { data: balance } = useBalance({ address });
  // const { data: signedHash, signMessage } = useSignMessage({
  //   message: 'Sign this message to prove you are the owner of this wallet',
  // });
  //
  // // Send test MATIC on Polygon Mumbai testnet
  // const { config } = usePrepareSendTransaction({
  //   chainId: polygonMumbai.id,
  //   to: '0x9247Ab385Bee424db5B09B696864867a53A77f1A',
  //   value: parseEther('0.001'),
  // });
  // const { data: txData, sendTransaction } = useSendTransaction(config);
  //
  // useWaitForTransaction({
  //   chainId: polygonMumbai.id,
  //   hash: txData?.hash,
  //   onSuccess() {
  //     Alert.alert('Transaction succeeded!', '0.001 MATIC sent successfully');
  //   },
  // });

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/*<Button title={'Inside HomeScreen with hook'} onPress={() => open()} />*/}
        <w3m-button label={'Inside HomeScreen'} />
      </View>

      {/*<View style={styles.block}>*/}
      {/*  <Text>Block number: {String(blockNumber ?? 0)}</Text>*/}
      {/*  <Text>Gas price: {feeData?.formatted.gasPrice ?? 0} ETH</Text>*/}
      {/*</View>*/}

      {/*{isConnected && (*/}
      {/*  <>*/}
      {/*    <View style={styles.block}>*/}
      {/*      <Text numberOfLines={1}>Address: {address}</Text>*/}
      {/*      <Text>*/}
      {/*        Balance: {balance?.formatted} {balance?.symbol}*/}
      {/*      </Text>*/}
      {/*    </View>*/}

      {/*    {signedHash && (*/}
      {/*      <View style={styles.block}>*/}
      {/*        <Text>Signature hash: {signedHash}</Text>*/}
      {/*      </View>*/}
      {/*    )}*/}

      {/*    <View style={styles.block}>*/}
      {/*      <Button title="Sign message" onPress={() => signMessage()} />*/}
      {/*    </View>*/}

      {/*    <View style={styles.block}>*/}
      {/*      <Button*/}
      {/*        title="Send 0.001 MATIC"*/}
      {/*        onPress={() => sendTransaction()}*/}
      {/*      />*/}
      {/*    </View>*/}
      {/*  </>*/}
      {/*)}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  block: {
    marginTop: 32,
  },
});
