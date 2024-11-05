import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';

export type ThemedInputProps =  TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'textColor01');
  const placeholderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'textColor03');
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'pageBackground');
  const focusedBorderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'color01');
  const blurredBorderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'textColor02');
  const [isFocused, setIsFocused] = useState(false);
  const styles = StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    link: {
      lineHeight: 30,
      fontSize: 16,
      color: '#0a7ea4',
    },
    inputFocused: {
      borderWidth: 2,
      borderColor: focusedBorderColor, // 聚焦时边框颜色
    },
    inputBlurred: {
      borderWidth: 1,
      borderColor: blurredBorderColor, // 失去焦点时边框颜色
    },
  });
  return (
    <TextInput
    style={[
        { color },
        { outlineStyle: 'none' },
        { backgroundColor: backgroundColor},
        { borderWidth:2 },
        isFocused ? styles.inputFocused:styles.inputBlurred ,
        styles.default,
        style,
      ]}
      placeholderTextColor={placeholderTextColor}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
}


