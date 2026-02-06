import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  flatListContentContainer: {
    paddingHorizontal: wp(20),
    gap: hp(10),
  },
  listFooterContainer: {
    height: hp(88),
  },
});
