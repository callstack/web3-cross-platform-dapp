import React from 'react';
import { StyleSheet, View } from 'react-native';
import { polygon } from 'viem/chains';
import { useAccount, useBalance } from 'wagmi';
import { UNI_ADDRESS, USDC_ADDRESS } from '../../constants';
import Text from '../../components/Text';
import BalanceItem from './BalanceItem';

export default function BalanceScreen() {
  const { address, isConnected } = useAccount();

  const { data: balanceETH } = useBalance({
    address,
    formatUnits: 'ether',
  });
  const { data: balanceUSDC } = useBalance({
    address,
    token: USDC_ADDRESS,
  });
  const { data: balanceUNI } = useBalance({
    address,
    token: UNI_ADDRESS,
  });
  const { data: balanceMATIC } = useBalance({
    address,
    chainId: polygon.id,
  });

  if (!isConnected) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Connect wallet to display balances</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {balanceETH && (
        <BalanceItem
          balance={balanceETH.formatted}
          symbol={balanceETH.symbol}
          iconSource={require('../../../assets/svg/eth-logo.svg')}
        />
      )}
      {balanceUSDC && (
        <BalanceItem
          balance={balanceUSDC.formatted}
          symbol={balanceUSDC.symbol}
          iconSource={require('../../../assets/svg/usdc-logo.svg')}
        />
      )}
      {balanceUNI && (
        <BalanceItem
          balance={balanceUNI.formatted}
          symbol={balanceUNI.symbol}
          iconSource={require('../../../assets/svg/uni-logo.svg')}
        />
      )}
      {balanceMATIC && (
        <BalanceItem
          balance={balanceMATIC.formatted}
          symbol={balanceMATIC.symbol}
          iconSource={require('../../../assets/svg/matic-logo.svg')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
