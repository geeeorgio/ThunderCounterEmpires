import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingTop: hp(20),
    borderTopLeftRadius: wp(35),
    borderTopRightRadius: wp(35),
  },
});
