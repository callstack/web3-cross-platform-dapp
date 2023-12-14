import React from 'react';
import { StyleSheet, View } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
});

export default Separator;
