import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    top: hp(60),
    width: wp(250),
    backgroundColor: COLORS.grey,
    borderRadius: wp(12),
    zIndex: 1000,
  },
  button: {
    width: '100%',
    paddingVertical: wp(10),
    paddingHorizontal: wp(16),
    borderRadius: wp(10),
    alignItems: 'flex-start',
  },
  activeButton: {
    backgroundColor: COLORS.grey_border_55,
  },
  text: {
    fontSize: sp(14),
    fontFamily: FONTS.IntMedium,
    color: COLORS.black,
  },
  divider: {
    width: '100%',
    height: hp(1),
    backgroundColor: COLORS.grey_opacity_80,
  },
});
