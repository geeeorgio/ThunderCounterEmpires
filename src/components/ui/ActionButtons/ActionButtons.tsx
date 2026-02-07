import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import PenIcon from '../CustomIcons/PenIcon';
import SaveIcon from '../CustomIcons/SaveIcon';
import SortIcon from '../CustomIcons/SortIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface ActionButtonsProps {
  onSortPress: () => void;
  onEditPress: () => void;
  isEditing: boolean;
  onSavedPress: () => void;
  isSavedActive: boolean;
}

const ActionButtons = ({
  onSortPress,
  onEditPress,
  isEditing,
  onSavedPress,
  isSavedActive,
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
        <PenIcon
          width={wp(18)}
          height={hp(18)}
          color={isEditing ? COLORS.purple_main : COLORS.white}
        />
        <CustomText
          extraStyle={[
            styles.counterHeaderButtonText,
            isEditing && { color: COLORS.purple_main },
          ]}
        >
          Edit
        </CustomText>
      </CustomButton>
      <CustomButton
        variant="purple_light"
        onPress={onSavedPress}
        extraStyle={styles.counterHeaderButton}
      >
        <SaveIcon
          width={wp(12)}
          height={hp(18)}
          color={isSavedActive ? COLORS.purple_main : COLORS.white}
        />
        <CustomText
          extraStyle={[
            styles.counterHeaderButtonText,
            isSavedActive && { color: COLORS.purple_main },
          ]}
        >
          Saved
        </CustomText>
      </CustomButton>
    </View>
  );
};

export default ActionButtons;
