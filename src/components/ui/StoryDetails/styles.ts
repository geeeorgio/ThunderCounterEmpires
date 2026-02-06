import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: wp(16),
    paddingBottom: hp(80),
    gap: hp(20),
  },
  storyInfoContainer: {
    gap: hp(10),
    borderWidth: wp(2),
    borderColor: COLORS.white,
    borderRadius: wp(15),
    padding: wp(10),
  },
  storyTitle: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  storyDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.MontRegular,
    lineHeight: hp(22),
  },
  shareButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(10),
    paddingHorizontal: wp(16),
    paddingVertical: hp(12),
  },
  shareButtonText: {
    fontSize: sp(20),
    fontFamily: FONTS.IntBlack,
  },
});
