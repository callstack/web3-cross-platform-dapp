import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { W3mButton } from '../web3modal';
import Logo from '../../components/Logo';

function TabHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <Logo />
      <View style={styles.w3mButton}>
        <W3mButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  w3mButton: {
    marginLeft: 'auto',
  },
});

export default TabHeader;
