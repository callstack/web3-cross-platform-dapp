import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Text from '../../components/Text';
import { theme } from '../../theme';

type BalanceItemProps = {
  balance: string;
  symbol: string;
  iconSource: string;
};

function BalanceItem({ balance, symbol, iconSource }: BalanceItemProps) {
  return (
    <View style={styles.container}>
      <Image
        accessibilityIgnoresInvertColors
        source={iconSource}
        style={styles.icon}
        contentFit="contain"
      />
      <Text>
        {Number(balance).toFixed(3)} {symbol}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 150,
    gap: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default BalanceItem;
