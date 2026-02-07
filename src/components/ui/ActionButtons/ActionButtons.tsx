import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import PenIcon from '../CustomIcons/PenIcon';
import SaveIcon from '../CustomIcons/SaveIcon';
import SortIcon from '../CustomIcons/SortIcon';
import CustomText from '../CustomText/CustomText';

import SortBtnModal from './SortBtnModal/SortBtnModal';
import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { SortType } from 'src/types';
import { hp, wp } from 'src/utils';

interface ActionButtonsProps {
  onSortPress: () => void;
  isSorting: boolean;
  handleSortSelect: (type: SortType) => void;
  sortType: SortType;
  onEditPress: () => void;
  isEditing: boolean;
  onSavedPress: () => void;
  isSavedActive: boolean;
}

const ActionButtons = ({
  onSortPress,
  isSorting,
  handleSortSelect,
  sortType,
  onEditPress,
  isEditing,
  onSavedPress,
  isSavedActive,
}: ActionButtonsProps) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.counterHeaderContainer}>
        <CustomButton
          variant="purple_light"
          onPress={onSortPress}
          extraStyle={styles.counterHeaderButton}
        >
          <SortIcon
            width={wp(16)}
            height={hp(16)}
            color={isSorting ? COLORS.purple_main : COLORS.white}
          />
          <CustomText
            extraStyle={[
              styles.counterHeaderButtonText,
              isSorting && { color: COLORS.purple_main },
            ]}
          >
            Sort by
          </CustomText>
        </CustomButton>
        <CustomButton
          variant="purple_light"
          onPress={onEditPress}
          extraStyle={styles.counterHeaderButton}
        >
          <PenIcon
            width={wp(16)}
            height={hp(16)}
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
            height={hp(16)}
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

      <SortBtnModal
        visible={isSorting}
        onSortSelect={handleSortSelect}
        activeSortType={sortType}
      />
    </View>
  );
};

export default ActionButtons;
