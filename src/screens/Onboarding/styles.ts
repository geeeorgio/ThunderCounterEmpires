import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: hp(40),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    paddingTop: hp(20),
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
    paddingTop: hp(10),
    position: 'relative',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(16),
    paddingHorizontal: wp(50),
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
    bottom: hp(60),
    width: '60%',
    paddingHorizontal: wp(10),
    paddingVertical: hp(10),
    zIndex: 10,
  },
  buttonText: {
    fontSize: sp(16),
    fontFamily: FONTS.IntBlack,
  },
});
