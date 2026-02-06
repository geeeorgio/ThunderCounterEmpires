import { useState } from 'react';
import { Switch, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  ShareIcon,
} from 'src/components';
import { COLORS } from 'src/constants';
import { handleShare, hp, wp } from 'src/utils';

const SettingsScreen = () => {
  const [vibration, setVibration] = useState(true);
  const [notification, setNotification] = useState(false);

  const handleSharePress = () => {
    handleShare();
  };

  const handleVibrationChange = () => {
    setVibration(!vibration);
  };

  const handleNotificationChange = () => {
    setNotification(!notification);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader />
      <CustomContainer
        variant="purple_main"
        extraStyle={styles.contentContainer}
      >
        <View style={styles.settingsContainer}>
          <View style={styles.settingsItem}>
            <CustomText extraStyle={styles.settingsItemText}>
              Vibration
            </CustomText>
            <Switch
              style={styles.switch}
              value={vibration}
              onValueChange={handleVibrationChange}
              thumbColor={COLORS.white}
              trackColor={{
                true: COLORS.green_1,
                false: COLORS.grey_border_55,
              }}
            />
          </View>
          <View style={styles.settingsItemSeparator} />
          <View style={styles.settingsItem}>
            <CustomText extraStyle={styles.settingsItemText}>
              Notification
            </CustomText>
            <Switch
              style={styles.switch}
              value={notification}
              onValueChange={handleNotificationChange}
              thumbColor={COLORS.white}
              trackColor={{
                true: COLORS.green_1,
                false: COLORS.grey_border_55,
              }}
            />
          </View>
        </View>

        <CustomButton
          variant="purple_main"
          onPress={handleSharePress}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Share the app</CustomText>
          <ShareIcon width={wp(22)} height={hp(22)} />
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
