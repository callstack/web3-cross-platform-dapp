import React from 'react';
import { Platform } from 'react-native';
import HomeScreen from '../features/home/HomeScreen';
import ExploreScreen from '../features/explore/ExploreScreen';
import NotificationsScreen from '../features/notifications/NotificationsScreen';
import MessagesScreen from '../features/messages/MessagesScreen';
import BookmarksScreen from '../features/bookmarks/BookmarksScreen';
import ProfileScreen from '../features/profile/ProfileScreen';
import NavIcon from './NavIcon';
import { ParamList, RootDrawer, RootTab } from './index';

const screens: {
  name: keyof ParamList;
  component: () => React.JSX.Element;
}[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Explore',
    component: ExploreScreen,
  },
  {
    name: 'Notifications',
    component: NotificationsScreen,
  },
  {
    name: 'Messages',
    component: MessagesScreen,
  },
  {
    name: 'Bookmarks',
    component: BookmarksScreen,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
];

const RootNavigator = () => {
  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        screenOptions={{
          header: () => null,
          drawerType: 'permanent',
        }}>
        {screens.map(screen => (
          <RootDrawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              drawerIcon: ({ focused }) => (
                <NavIcon screenName={screen.name} focused={focused} />
              ),
            }}
          />
        ))}
      </RootDrawer.Navigator>
    );
  }

  return (
    <RootTab.Navigator screenOptions={{ headerShown: false }}>
      {screens.map(screen => (
        <RootTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <NavIcon screenName={screen.name} focused={focused} />
            ),
          }}
        />
      ))}
    </RootTab.Navigator>
  );
};

export default RootNavigator;
