import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import BackIcon from '../CustomIcons/BackIcon';
import SettingsIcon from '../CustomIcons/SettingsIcon';

import { styles } from './styles';

import { LOGO_ICON } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';
import { hp, wp } from 'src/utils';

interface CustomHeaderProps {
  handleBackPress?: () => void;
}

const CustomHeader = ({ handleBackPress }: CustomHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleGoBack = () => {
    if (handleBackPress) {
      handleBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={handleGoBack} extraStyle={styles.button}>
        <BackIcon width={wp(24)} height={hp(26)} />
      </CustomButton>

      <View style={styles.logoContainer}>
        <Image
          source={LOGO_ICON}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </View>

      <CustomButton
        onPress={() => navigation.navigate('SettingsScreen')}
        extraStyle={styles.button}
      >
        <SettingsIcon width={wp(26)} height={hp(26)} />
      </CustomButton>
    </View>
  );
};

export default CustomHeader;
