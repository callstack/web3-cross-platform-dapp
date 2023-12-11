import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { W3mButton } from '../web3modal';
import Logo from '../../components/Logo';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.w3mButton}>
        <W3mButton balance="hide" />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginVertical: 20,
    marginLeft: 24,
  },
  w3mButton: {
    marginTop: 20,
    marginLeft: 18,
  },
});

export default CustomDrawerContent;
