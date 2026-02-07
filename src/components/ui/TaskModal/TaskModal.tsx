import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface TaskModalProps {
  visible: boolean;
  onCloseModal: () => void;
  onDeleteTask: () => void;
}

const TaskModal = ({ visible, onCloseModal, onDeleteTask }: TaskModalProps) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onCloseModal}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      style={styles.modal}
    >
      <Pressable style={styles.overlay} onPress={onCloseModal}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <CustomText extraStyle={styles.title}>Counter deletion</CustomText>
            <CustomText extraStyle={styles.description}>
              Are you sure you want to delete this counter?
            </CustomText>
          </View>

          <View style={styles.buttonsContainer}>
            <CustomButton
              onPress={onCloseModal}
              extraStyle={styles.cancelButton}
            >
              <CustomText extraStyle={styles.cancelButtonText}>
                Cancel
              </CustomText>
            </CustomButton>
            <CustomButton
              onPress={onDeleteTask}
              extraStyle={styles.deleteButton}
            >
              <CustomText extraStyle={styles.deleteButtonText}>
                Delete
              </CustomText>
            </CustomButton>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default TaskModal;
