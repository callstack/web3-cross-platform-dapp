import { DarkTheme } from '@react-navigation/native';

const reactNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(103,215,105)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(35,35,35)',
    notification: 'rgb(255, 69, 58)',
  },
};

const theme = {
  colors: {
    ...reactNavigationTheme.colors,
    disabled: 'rgb(66,64,64)',
    danger: 'rgb(255, 69, 58)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    lightWhite: 'rgba(255, 255, 255, 0.1)',
  },
};

export { reactNavigationTheme, theme };
