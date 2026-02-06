import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { LOGO_ICON } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.headerContainer}>
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
        <View style={styles.menuContainer}>
          <CustomButton
            variant="purple_main"
            onPress={() => navigation.navigate('CounterScreen')}
            extraStyle={styles.menuButton}
          >
            <CustomText extraStyle={styles.menuButtonText}>
              Add counter
            </CustomText>
          </CustomButton>
          <CustomButton
            variant="purple_main"
            onPress={() => navigation.navigate('StoriesScreen')}
            extraStyle={styles.menuButton}
          >
            <CustomText extraStyle={styles.menuButtonText}>
              Productivity stories
            </CustomText>
          </CustomButton>
          <CustomButton
            variant="purple_main"
            onPress={() => navigation.navigate('SettingsScreen')}
            extraStyle={styles.menuButton}
          >
            <CustomText extraStyle={styles.menuButtonText}>Settings</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
