import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(66),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    marginBottom: hp(20),
  },
  button: {
    alignSelf: 'flex-end',
  },
  logoContainer: {
    width: wp(110),
    height: hp(50),
  },
  logoIcon: {
    width: '100%',
    height: '100%',
  },
});
