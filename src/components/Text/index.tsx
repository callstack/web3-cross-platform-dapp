import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { theme } from '../../lib/theme';

type TextProps = RNTextProps & {
  disabled?: boolean;
  color?: string;
};

const Text = ({
  disabled = false,
  color = theme.colors.text,
  ...props
}: TextProps) => {
  return (
    <RNText
      {...props}
      style={[
        { color },
        disabled && { color: theme.colors.disabled },
        props.style,
      ]}
    />
  );
};

export default Text;
