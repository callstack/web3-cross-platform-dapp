import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { useTheme } from '@react-navigation/native';
import { RootTab } from '../index';
import { getIconForRoute } from '../utils';
import HomeScreen from '../../features/home/HomeScreen';

const HomeNavigator = () => {
  const { colors } = useTheme();

  return (
    <RootTab.Navigator screenOptions={{ headerShown: false }}>
      <RootTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name={getIconForRoute('Home')}
              size={20}
              color={focused ? colors.primary : colors.border}
            />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

export default HomeNavigator;
