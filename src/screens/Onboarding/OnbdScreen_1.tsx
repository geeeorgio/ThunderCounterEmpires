import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { LOGO_ICON, ONBOARDING } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnbdScreen_1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnbdScreen_2');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={LOGO_ICON}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </View>

      <CustomContainer
        variant="purple_main"
        extraStyle={styles.contentContainer}
      >
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.contentTitle}>
            Welcome to Thunder Counter Empires
          </CustomText>
          <CustomText extraStyle={styles.contentDescription}>
            Count anything, step by step. Every tap moves you forward and builds
            your progress.
          </CustomText>
        </View>

        <Image
          source={ONBOARDING.onbd1}
          style={styles.onbdImage}
          resizeMode="contain"
        />

        <CustomButton
          variant="purple_main"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Get Started</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnbdScreen_1;
