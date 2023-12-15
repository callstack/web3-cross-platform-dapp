import React from 'react';
import { Platform } from 'react-native';
import HomeScreen from '../../features/home/HomeScreen';
import ProfileScreen from '../../features/profile/ProfileScreen';
import SignInScreen from '../../features/sign-in/SignInScreen';
import NotificationsScreen from '../../features/notifications/NotificationsScreen';
import MessagesScreen from '../../features/messages/MessagesScreen';
import BookmarksScreen from '../../features/bookmarks/BookmarksScreen';
import { useSession, SessionType } from '../lens-sdk';
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
] as const;

const RootNavigator = () => {
  const { data: session } = useSession();

  const authenticated =
    session?.authenticated && session?.type === SessionType.WithProfile;

  if (Platform.OS === 'web') {
    return (
      <RootDrawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{
          header: () => null,
          drawerType: 'permanent',
        }}>
        {authenticated ? (
          screens.map(screen => (
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
          ))
        ) : (
          <RootDrawer.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign In',
              drawerIcon: ({ focused }) => (
                <NavIcon screenName="SignIn" focused={focused} />
              ),
            }}
          />
        )}
      </RootDrawer.Navigator>
    );
  }

  return (
    <RootTab.Navigator
      screenOptions={{
        header: () => <TabHeader />,
      }}>
      {authenticated ? (
        screens.map(screen => (
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
        ))
      ) : (
        <RootTab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
            tabBarIcon: ({ focused }) => (
              <NavIcon screenName="SignIn" focused={focused} />
            ),
          }}
        />
      )}
    </RootTab.Navigator>
  );
};

export default RootNavigator;
