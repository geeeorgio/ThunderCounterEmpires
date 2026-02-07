import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(60),
    backgroundColor: COLORS.modal_overlay,
  },
  container: {
    width: '100%',
    backgroundColor: COLORS.grey,
    borderRadius: wp(14),
  },
  contentContainer: {
    width: '100%',
    padding: wp(16),
  },
  title: {
    fontSize: sp(16),
    color: COLORS.black,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    color: COLORS.black,
    fontFamily: FONTS.IntMedium,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: wp(1),
    borderTopColor: COLORS.grey_opacity_80,
  },
  cancelButton: {
    flex: 0.5,
    paddingVertical: hp(12),
    borderRightWidth: wp(1),
    borderRightColor: COLORS.grey_opacity_80,
  },
  deleteButton: {
    flex: 0.5,
    paddingVertical: hp(12),
  },
  cancelButtonText: {
    fontSize: sp(15),
    color: COLORS.blue_text,
    fontFamily: FONTS.IntMedium,
  },
  deleteButtonText: {
    fontSize: sp(15),
    color: COLORS.red_1,
  },
});
