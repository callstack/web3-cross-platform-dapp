import { DarkTheme } from '@react-navigation/native';

const reactNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(122,255,124)',
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
    disabled: 'rgb(52,50,50)',
    danger: 'rgb(255, 69, 58)',
  },
};

export { reactNavigationTheme, theme };
