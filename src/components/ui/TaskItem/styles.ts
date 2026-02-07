import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  swipeWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: wp(8),
    borderRadius: wp(15),
    borderWidth: wp(2),
    borderColor: COLORS.white,
    gap: hp(12),
  },
  editingContainer: {
    transform: [{ translateX: wp(-90) }],
  },
  taskInfoContainer: {
    backgroundColor: COLORS.input_color,
    width: '100%',
    padding: wp(10),
    borderRadius: wp(10),
  },
  taskTitle: {
    fontSize: sp(14),
  },
  taskStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(10),
    borderRadius: wp(15),
  },
  taskNumber: {
    flex: 0.6,
    backgroundColor: COLORS.input_color,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(16),
    borderRadius: wp(10),
  },
  taskNumberText: {
    fontSize: sp(20),
  },
  taskStatusBtn: {
    flex: 0.2,
    paddingVertical: hp(10),
    borderRadius: wp(15),
  },
  taskStatusBtnText: {
    fontSize: sp(22),
    fontFamily: FONTS.IntBlack,
  },
  taskFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(10),
  },
  taskDate: {
    flex: 0.5,
    paddingVertical: wp(12),
    backgroundColor: COLORS.input_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
  },
  taskText: {
    fontSize: sp(12),
  },
  taskTime: {
    flex: 0.35,
    paddingVertical: wp(12),
    backgroundColor: COLORS.input_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
  },
  saveBtn: {
    flex: 0.15,
    borderWidth: wp(1),
    borderColor: COLORS.purple_light,
    padding: wp(11),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
  },
  favoriteBtn: {
    backgroundColor: COLORS.purple_light,
  },
  deleteBtn: {
    position: 'absolute',
    right: wp(-85),
    width: wp(80),
    height: '40%',
    backgroundColor: COLORS.red_1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(10),
  },
  editingDeleteBtn: {
    right: 0,
    zIndex: 100,
  },
});
