import React from 'react';
import { StyleSheet, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { theme } from '../theme';
import { getIconForRoute } from './utils';
import { ParamList } from './index';

type NavIconProps = {
  screenName: keyof ParamList;
  focused: boolean;
};

function NavIcon({ screenName, focused }: NavIconProps) {
  return (
    <View style={styles.container}>
      <Octicons
        name={getIconForRoute(screenName)}
        size={20}
        color={focused ? theme.colors.primary : theme.colors.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavIcon;
