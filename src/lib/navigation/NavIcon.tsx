import React from 'react';
import { StyleSheet, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { theme } from '../theme';
import { ParamList } from './index';

type NavIconProps = {
  screenName: keyof ParamList;
  focused: boolean;
};

export function getIconForRoute(
  routeName: string,
): keyof typeof Octicons.glyphMap {
  switch (routeName) {
    case 'SignIn':
      return 'shield-lock';
    case 'Home':
      return 'apps';
    case 'Notifications':
      return 'bell';
    case 'Messages':
      return 'mail';
    case 'Bookmarks':
      return 'bookmark';
    case 'Profile':
      return 'person';
    default:
      return 'question';
  }
}

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
