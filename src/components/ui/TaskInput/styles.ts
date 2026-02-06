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
    gap: hp(10),
  },
  inputTitleContainer: {
    width: '100%',
    height: hp(40),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.input_color,
  },
  inputTitle: {
    width: '100%',
    fontSize: sp(14),
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
    flex: 0.4,
    backgroundColor: COLORS.input_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    paddingVertical: hp(10),
  },
  timeInputContainer: {
    flex: 0.25,
    backgroundColor: COLORS.input_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    paddingVertical: hp(10),
  },
  inputDetailsBtn: {
    flex: 0.15,
    paddingVertical: hp(10),
  },
  inputDetailsBtnText: {
    fontSize: sp(12),
    fontFamily: FONTS.IntMedium,
  },
  saveText: {
    color: COLORS.green_1,
  },
  cancelText: {
    color: COLORS.red_1,
  },
});
