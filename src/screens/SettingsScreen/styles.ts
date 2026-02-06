import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingTop: hp(20),
    paddingHorizontal: wp(20),
    paddingBottom: hp(60),
    justifyContent: 'space-between',
  },
  settingsContainer: {
    width: '100%',
    gap: hp(16),
    paddingTop: hp(10),
    paddingHorizontal: wp(16),
  },
  settingsItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsItemSeparator: {
    width: '100%',
    height: hp(1),
    backgroundColor: COLORS.grey_opacity_80,
  },
  settingsItemText: {
    fontSize: sp(18),
    fontFamily: FONTS.MontRegular,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(10),
    paddingHorizontal: wp(16),
    paddingVertical: hp(12),
  },
  buttonText: {
    fontSize: sp(20),
    fontFamily: FONTS.IntBlack,
  },
});
