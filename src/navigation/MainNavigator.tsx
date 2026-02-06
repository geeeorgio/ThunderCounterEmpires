import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, SettingsScreen, StoriesScreen } from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="StoriesScreen" component={StoriesScreen} />
      <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
