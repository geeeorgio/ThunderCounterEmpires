import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import PenIcon from '../CustomIcons/PenIcon';
import SaveIcon from '../CustomIcons/SaveIcon';
import SortIcon from '../CustomIcons/SortIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { hp, wp } from 'src/utils';

interface ActionButtonsProps {
  onSortPress: () => void;
  onEditPress: () => void;
  onSavedPress: () => void;
}

const ActionButtons = ({
  onSortPress,
  onEditPress,
  onSavedPress,
}: ActionButtonsProps) => {
  return (
    <View style={styles.counterHeaderContainer}>
      <CustomButton
        variant="purple_light"
        onPress={onSortPress}
        extraStyle={styles.counterHeaderButton}
      >
        <SortIcon width={wp(18)} height={hp(18)} />
        <CustomText extraStyle={styles.counterHeaderButtonText}>
          Sort by
        </CustomText>
      </CustomButton>
      <CustomButton
        variant="purple_light"
        onPress={onEditPress}
        extraStyle={styles.counterHeaderButton}
      >
        <PenIcon width={wp(18)} height={hp(18)} />
        <CustomText extraStyle={styles.counterHeaderButtonText}>
          Edit
        </CustomText>
      </CustomButton>
      <CustomButton
        variant="purple_light"
        onPress={onSavedPress}
        extraStyle={styles.counterHeaderButton}
      >
        <SaveIcon width={wp(12)} height={hp(18)} />
        <CustomText extraStyle={styles.counterHeaderButtonText}>
          Saved
        </CustomText>
      </CustomButton>
    </View>
  );
};

export default ActionButtons;
