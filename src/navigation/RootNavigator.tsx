import React from 'react';
import { Platform } from 'react-native';
import HomeScreen from '../features/home/HomeScreen';
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
    component: () => null,
  },
  {
    name: 'Notifications',
    component: () => null,
  },
  {
    name: 'Messages',
    component: () => null,
  },
  {
    name: 'Bookmarks',
    component: () => null,
  },
  {
    name: 'Profile',
    component: () => null,
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
