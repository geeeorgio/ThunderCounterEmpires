import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    gap: hp(60),
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: wp(200),
    height: hp(100),
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: hp(50),
    paddingHorizontal: wp(40),
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: hp(24),
    padding: hp(12),
  },
  menuButton: {
    width: '100%',
    paddingHorizontal: wp(16),
    paddingVertical: hp(20),
  },
  menuButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.IntBlack,
  },
});
