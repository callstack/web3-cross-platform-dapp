import React from 'react';
import { Platform } from 'react-native';
import { useSession } from '@lens-protocol/react-native';
import HomeScreen from '../features/home/HomeScreen';
import BalanceScreen from '../features/balance/BalanceScreen';
import ProfileScreen from '../features/profile/ProfileScreen';
import SignInScreen from '../features/sign-in/SignInScreen';
import NavIcon from './NavIcon';
import DrawerContent from './DrawerContent';
import TabHeader from './TabHeader';
import { RootDrawer, RootTab } from './index';

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Balance',
    component: BalanceScreen,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
] as const;

const RootNavigator = () => {
  const { data: session } = useSession();

  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{
          header: () => null,
          drawerType: 'permanent',
        }}>
        {screens.map(screen => (
          <RootDrawer.Screen
            key={screen.name}
            name={screen.name}
            component={session?.authenticated ? screen.component : SignInScreen}
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
    <RootTab.Navigator
      screenOptions={{
        header: () => <TabHeader />,
      }}>
      {screens.map(screen => (
        <RootTab.Screen
          key={screen.name}
          name={screen.name}
          component={session?.authenticated ? screen.component : SignInScreen}
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
