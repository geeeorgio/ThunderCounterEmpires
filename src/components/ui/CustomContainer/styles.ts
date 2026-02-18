import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
  },
  purple_main: {
    backgroundColor: COLORS.pearl_main,
    borderTopLeftRadius: wp(50),
    borderTopRightRadius: wp(50),
  },
  lightPurple: {
    backgroundColor: COLORS.pearl_light,
    borderRadius: wp(10),
  },
  dark: {
    backgroundColor: COLORS.pearl_bg,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
});
