import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnbdScreen_1,
  OnbdScreen_2,
  OnbdScreen_3,
  OnbdScreen_4,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <OnboardingStack.Screen name="OnbdScreen_1" component={OnbdScreen_1} />
      <OnboardingStack.Screen name="OnbdScreen_2" component={OnbdScreen_2} />
      <OnboardingStack.Screen name="OnbdScreen_3" component={OnbdScreen_3} />
      <OnboardingStack.Screen name="OnbdScreen_4" component={OnbdScreen_4} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
