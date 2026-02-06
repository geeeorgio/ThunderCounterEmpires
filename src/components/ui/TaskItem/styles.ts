import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskInfoContainer: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskTitle: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  taskStatusContainer: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskNumber: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskNumberText: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  taskStatusBtn: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskStatusBtnText: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  taskFooter: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskDate: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskDateText: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  taskTime: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskTimeText: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
  saveBtn: {
    width: '100%',
    height: hp(100),
    padding: wp(12),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
  },
  taskFooterBtnText: {
    fontSize: sp(14),
    lineHeight: hp(22),
  },
});
