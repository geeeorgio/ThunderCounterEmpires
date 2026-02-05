import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
  },
  purple_main: {
    backgroundColor: COLORS.purple_main,
    borderTopLeftRadius: wp(50),
    borderTopRightRadius: wp(50),
  },
  lightPurple: {
    backgroundColor: COLORS.purple_light,
    borderRadius: wp(10),
  },
  dark: {
    backgroundColor: COLORS.input_color,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
});
