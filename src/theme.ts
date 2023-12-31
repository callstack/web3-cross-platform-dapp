import { DarkTheme } from '@react-navigation/native';

const reactNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(150,122,255)',
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
  },
};

export { reactNavigationTheme, theme };
