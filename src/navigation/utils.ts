import Octicons from '@expo/vector-icons/Octicons';

export function getIconForRoute(routeName: string) {
  let iconName: keyof typeof Octicons.glyphMap;

  switch (routeName) {
    case 'Home':
      iconName = 'apps';
      break;
    case 'Balance':
      iconName = 'ruby';
      break;
    case 'Notifications':
      iconName = 'bell';
      break;
    case 'Messages':
      iconName = 'mail';
      break;
    case 'Bookmarks':
      iconName = 'bookmark';
      break;
    case 'Profile':
      iconName = 'person';
      break;
    default:
      break;
  }

  return iconName;
}
