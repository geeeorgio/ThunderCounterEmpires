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

const OnbdScreen_3 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnbdScreen_4');
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
            Stay Focused While Counting
          </CustomText>
          <CustomText extraStyle={styles.contentDescription}>
            Use short stories and calm moments to help you focus, reset, and
            stay mindful.
          </CustomText>
        </View>

        <Image
          source={ONBOARDING.onbd3}
          style={styles.onbdImage}
          resizeMode="contain"
        />

        <CustomButton
          variant="purple_main"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Continue</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnbdScreen_3;
