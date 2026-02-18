import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
  },
  purple_main: {
    backgroundColor: COLORS.days_main,
    borderTopLeftRadius: wp(50),
    borderTopRightRadius: wp(50),
  },
  lightPurple: {
    backgroundColor: COLORS.days_light,
    borderRadius: wp(10),
  },
  dark: {
    backgroundColor: COLORS.days_bg,
    borderWidth: wp(0),
    borderRadius: wp(10),
  },
});
