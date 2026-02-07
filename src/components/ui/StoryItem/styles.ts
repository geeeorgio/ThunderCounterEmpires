import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(96),
    padding: wp(8),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
    gap: hp(10),
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: sp(12),
    lineHeight: hp(18),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.MontRegular,
    lineHeight: hp(18),
  },
});
