import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    gap: hp(20),
    paddingTop: hp(20),
    paddingHorizontal: wp(16),
    borderTopLeftRadius: wp(35),
    borderTopRightRadius: wp(35),
    position: 'relative',
  },
  addTaskBtn: {
    width: '100%',
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  addTaskBtnText: {
    fontSize: sp(14),
  },
  footerButtons: {
    position: 'absolute',
    bottom: hp(60),
    left: wp(20),
    right: wp(20),
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(20),
    zIndex: 11,
  },
  purpleBtn: {
    flex: 0.8,
    paddingVertical: hp(12),
  },
  greenBtn: {
    flex: 0.2,
    paddingVertical: hp(12),
  },
  footerButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.IntBlack,
  },
  noSavedTasksContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(2),
    borderColor: COLORS.grey_border_55,
    paddingVertical: hp(12),
    borderRadius: wp(15),
  },
  noSavedTasksText: {
    fontSize: sp(15),
    lineHeight: hp(20),
    fontFamily: FONTS.MontRegular,
    textAlign: 'center',
  },
});
