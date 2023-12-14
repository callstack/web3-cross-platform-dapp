import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { theme } from '../../lib/theme';
import Text from '../Text';

type ButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  color?: keyof typeof theme.colors;
};

function Button({
  title,
  disabled = false,
  loading = false,
  onPress,
  color = 'primary',
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isDisabled
            ? theme.colors.disabled
            : theme.colors[color],
        },
        { transform: [{ scale: pressed ? 0.95 : 1 }] },
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      <Text numberOfLines={1} style={styles.text}>
        {loading ? 'Loading...' : title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Button;
