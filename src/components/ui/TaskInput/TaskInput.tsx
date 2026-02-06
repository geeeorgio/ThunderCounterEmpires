import { TextInput, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface TaskInputProps {
  title: string;
  editable?: boolean;
  onChangeText: (text: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const TaskInput = ({
  title,
  editable,
  onChangeText,
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
          onChangeText={() => {}}
          onBlur={() => {}}
          onSubmitEditing={() => {}}
          submitBehavior={'blurAndSubmit'}
          returnKeyType={'default'}
          maxLength={40}
          editable={editable}
        />
      </View>
      <View style={styles.inputDetailsContainer}>
        <CustomButton onPress={() => {}} extraStyle={styles.dateInputContainer}>
          <CustomText extraStyle={styles.inputDetailsBtnText}>Date</CustomText>
        </CustomButton>
        <CustomButton onPress={() => {}} extraStyle={styles.timeInputContainer}>
          <CustomText extraStyle={styles.inputDetailsBtnText}>Time</CustomText>
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
