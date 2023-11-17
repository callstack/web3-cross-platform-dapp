import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { W3mButton } from '../web3modal';
import Logo from '../components/Logo';

function TabHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.w3mButton}>
        <W3mButton />
      </View>
    </SafeAreaView>
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
