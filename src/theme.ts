import { DarkTheme } from '@react-navigation/native';

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(116,227,86)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(35,35,35)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default darkTheme;
