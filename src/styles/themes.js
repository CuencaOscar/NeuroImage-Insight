import { DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { colors } from './colors';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: colors.primary,
    background: '#000000',
    text: '#FFFFFF',
  },
};