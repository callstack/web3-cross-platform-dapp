import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';
import { theme } from '../../lib/theme';

function Logo() {
  return <Text style={styles.logo}>Lenspo</Text>;
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: -2.5,
    fontSize: 24,
    color: theme.colors.primary,
  },
});

export default Logo;
