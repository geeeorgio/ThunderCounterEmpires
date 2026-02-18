import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: COLORS.red_1,
  },
  purple_main: {
    backgroundColor: COLORS.pearl_btn,
    borderWidth: wp(5),
    borderColor: COLORS.grey_border,
    borderRadius: wp(20),
  },
  purple_light: {
    backgroundColor: COLORS.pearl_btn,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
  green: {
    backgroundColor: COLORS.pearl_light,
    borderWidth: wp(5),
    borderColor: COLORS.grey_border,
    borderRadius: wp(20),
  },
  grey: {
    backgroundColor: COLORS.grey,
    borderWidth: wp(5),
    borderColor: COLORS.grey_border,
    borderRadius: wp(20),
  },
  dark: {
    backgroundColor: COLORS.pearl_bg,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
});
