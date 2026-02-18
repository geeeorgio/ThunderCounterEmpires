import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: wp(6),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
    gap: hp(6),
  },
  inputTitleContainer: {
    width: '100%',
    height: hp(40),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.days_bg,
  },
  inputTitle: {
    width: '100%',
    fontSize: sp(12),
    paddingLeft: wp(12),
    paddingVertical: hp(8),
    color: COLORS.white,
  },
  inputDetailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(4),
  },
  dateInputContainer: {
    flex: 0.44,
    backgroundColor: COLORS.days_bg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    paddingVertical: hp(10),
  },
  timeInputContainer: {
    flex: 0.26,
    backgroundColor: COLORS.days_bg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    paddingVertical: hp(10),
  },
  inputDetailsBtn: {
    flex: 0.15,
    paddingVertical: hp(9),
    borderColor: COLORS.days_light,
    borderWidth: wp(1),
    borderRadius: wp(10),
  },
  inputDetailsBtnText: {
    fontSize: sp(10),
    fontFamily: FONTS.IntMedium,
  },
  saveText: {
    color: COLORS.days_text,
  },
  cancelText: {
    color: COLORS.days_accent,
  },
});
