import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { LOGO_ICON, ONBOARDING } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const OnbdScreen_4 = () => {
  const { setIsContextOnboardingCompleted } = useGameContext();

  const handleNext = () => {
    setIsContextOnboardingCompleted(true);
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
            Build Your {'\n'} Empire
          </CustomText>
          <CustomText extraStyle={styles.contentDescription}>
            Save important counters, adjust settings, and grow your progress one
            point at a time.
          </CustomText>
        </View>

        <Image
          source={ONBOARDING.onbd4}
          style={styles.onbdImage}
          resizeMode="contain"
        />

        <CustomButton
          variant="purple_main"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Start Counting</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnbdScreen_4;
