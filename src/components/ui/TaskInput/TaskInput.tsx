import { TextInput, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import { formatDateForTask, formatTimeForTask } from 'src/utils';

interface TaskInputProps {
  title: string;
  date: Date;
  editable?: boolean;
  onChangeTitle: (text: string) => void;
  onDatePress: () => void;
  onTimePress: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const TaskInput = ({
  title,
  date,
  editable = true,
  onChangeTitle,
  onDatePress,
  onTimePress,
  onSave,
  onCancel,
}: TaskInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputTitleContainer}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Enter title"
          placeholderTextColor={COLORS.white}
          value={title}
          onChangeText={onChangeTitle}
          onBlur={() => {}}
          onSubmitEditing={() => {}}
          submitBehavior={'blurAndSubmit'}
          returnKeyType={'default'}
          maxLength={40}
          editable={editable}
        />
      </View>
      <View style={styles.inputDetailsContainer}>
        <CustomButton
          onPress={onDatePress}
          extraStyle={styles.dateInputContainer}
        >
          <CustomText extraStyle={styles.inputDetailsBtnText}>
            {formatDateForTask(date)}
          </CustomText>
        </CustomButton>
        <CustomButton
          onPress={onTimePress}
          extraStyle={styles.timeInputContainer}
        >
          <CustomText extraStyle={styles.inputDetailsBtnText}>
            {formatTimeForTask(date)}
          </CustomText>
        </CustomButton>

        <CustomButton onPress={onSave} extraStyle={styles.inputDetailsBtn}>
          <CustomText
            extraStyle={[styles.inputDetailsBtnText, styles.saveText]}
          >
            Save
          </CustomText>
        </CustomButton>
        <CustomButton onPress={onCancel} extraStyle={styles.inputDetailsBtn}>
          <CustomText
            extraStyle={[styles.inputDetailsBtnText, styles.cancelText]}
          >
            Cancel
          </CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default TaskInput;
