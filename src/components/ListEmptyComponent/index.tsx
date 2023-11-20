import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Text';

type ListEmptyComponentProps = {
  text: string;
};

function ListEmptyComponent({ text }: ListEmptyComponentProps) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListEmptyComponent;
