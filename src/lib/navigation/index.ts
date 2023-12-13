import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type ParamList = {
  SignIn: undefined;
  Home: undefined;
  Notifications: undefined;
  Messages: undefined;
  Bookmarks: undefined;
  Profile: undefined;
};

export const RootTab = createBottomTabNavigator<ParamList>();

export const RootDrawer = createDrawerNavigator<ParamList>();
