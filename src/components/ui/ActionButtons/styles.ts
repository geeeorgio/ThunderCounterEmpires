import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  counterHeaderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: wp(16),
  },
  counterHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(10),
    padding: wp(10),
  },
  counterHeaderButtonText: {
    fontSize: sp(14),
    fontFamily: FONTS.IntMedium,
  },
});
