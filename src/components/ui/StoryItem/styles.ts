import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
    gap: hp(10),
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.MontRegular,
    lineHeight: hp(22),
  },
});
