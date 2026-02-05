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
    borderWidth: wp(5),
    borderColor: COLORS.grey_border,
    borderRadius: wp(10),
  },
  purple_main: {
    backgroundColor: COLORS.purple_btn,
    borderWidth: wp(5),
    borderColor: COLORS.grey_border,
    borderRadius: wp(20),
  },
  purple_light: {
    backgroundColor: COLORS.purple_light,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
  green: {
    backgroundColor: COLORS.green_1,
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
    backgroundColor: COLORS.input_color,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
});
