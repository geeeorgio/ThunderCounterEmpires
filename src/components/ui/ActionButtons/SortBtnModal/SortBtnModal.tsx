import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import type { SortType } from 'src/types';

interface SortBtnModalProps {
  visible: boolean;
  onSortSelect: (type: SortType) => void;
  activeSortType: SortType;
}

const SortBtnModal = ({
  visible,
  onSortSelect,
  activeSortType,
}: SortBtnModalProps) => {
  if (!visible) return null;

  return (
    <View style={[visible ? styles.container : { display: 'none' }]}>
      <CustomButton
        onPress={() => onSortSelect('date')}
        extraStyle={[
          styles.button,
          activeSortType === 'date' && styles.activeButton,
        ]}
      >
        <CustomText extraStyle={styles.text}>Date</CustomText>
      </CustomButton>
      <View style={styles.divider} />
      <CustomButton
        onPress={() => onSortSelect('title')}
        extraStyle={[
          styles.button,
          activeSortType === 'title' && styles.activeButton,
        ]}
      >
        <CustomText extraStyle={styles.text}>Title</CustomText>
      </CustomButton>
      <View style={styles.divider} />
      <CustomButton
        onPress={() => onSortSelect('countedMore')}
        extraStyle={[
          styles.button,
          activeSortType === 'countedMore' && styles.activeButton,
        ]}
      >
        <CustomText extraStyle={styles.text}>Counted more</CustomText>
      </CustomButton>
      <View style={styles.divider} />
      <CustomButton
        onPress={() => onSortSelect('countedLess')}
        extraStyle={[
          styles.button,
          activeSortType === 'countedLess' && styles.activeButton,
        ]}
      >
        <CustomText extraStyle={styles.text}>Counted less</CustomText>
      </CustomButton>
    </View>
  );
};

export default SortBtnModal;
