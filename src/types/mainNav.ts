import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  StoriesScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
