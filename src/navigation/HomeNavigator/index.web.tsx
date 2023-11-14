import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { useTheme } from '@react-navigation/native';
import { RootDrawer } from '../index';
import { getIconForRoute } from '../utils';
import HomeScreen from '../../features/home/HomeScreen';

const HomeNavigator = () => {
  const { colors } = useTheme();

  return (
    <RootDrawer.Navigator
      screenOptions={{
        header: () => null,
        drawerType: 'permanent',
      }}>
      <RootDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Octicons
              name={getIconForRoute('Home')}
              size={20}
              color={focused ? colors.primary : colors.border}
            />
          ),
        }}
      />
    </RootDrawer.Navigator>
  );
};

export default HomeNavigator;
