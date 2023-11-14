import Octicons from '@expo/vector-icons/Octicons';

export function getIconForRoute(routeName: string) {
  let iconName: keyof typeof Octicons.glyphMap;

  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    default:
      break;
  }

  return iconName;
}
