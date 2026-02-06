import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(60),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: wp(190),
    height: hp(90),
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp(16),
    position: 'relative',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(20),
    paddingHorizontal: wp(60),
    paddingTop: hp(16),
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: sp(18),
    fontFamily: FONTS.IntBlack,
  },
  contentDescription: {
    textAlign: 'center',
    fontFamily: FONTS.IntMedium,
    fontSize: sp(14),
  },
  onbdImage: {
    width: '100%',
    height: hp(450),
  },
  button: {
    position: 'absolute',
    bottom: hp(44),
    width: '60%',
    paddingHorizontal: wp(12),
    paddingVertical: hp(14),
    zIndex: 10,
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.IntBlack,
  },
});
