import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type ParamList = {
  Home: undefined;
  Balance: undefined;
  Profile: undefined;
};

export const RootTab = createBottomTabNavigator<ParamList>();

export const RootDrawer = createDrawerNavigator<ParamList>();
