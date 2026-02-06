import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  ActionButtons,
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  TaskInput,
  TasksList,
} from 'src/components';
import { useGameContext } from 'src/hooks/useGameContext';
import { TaskType } from 'src/types';

const CounterScreen = () => {
  const { contextTasks } = useGameContext();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSaveTask = () => {};

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader />
      <CustomContainer
        variant="purple_main"
        extraStyle={styles.contentContainer}
      >
        <ActionButtons
          onSortPress={() => {}}
          onEditPress={() => {}}
          onSavedPress={() => {}}
        />

        {contextTasks.length > 0 && !isFormVisible && (
          <TasksList tasks={contextTasks} />
        )}

        {contextTasks.length === 0 && !isFormVisible && (
          <CustomButton onPress={handleOpenForm} extraStyle={styles.addTaskBtn}>
            <CustomText extraStyle={styles.addTaskBtnText}>
              Add count
            </CustomText>
          </CustomButton>
        )}

        {isFormVisible && (
          <TaskInput onSave={handleSaveTask} onCancel={handleCloseForm} />
        )}

        <View style={styles.footerButtons}>
          <CustomButton
            variant="purple_main"
            onPress={() => {}}
            extraStyle={styles.purpleBtn}
          >
            <CustomText extraStyle={styles.footerButtonText}>
              Productivity
            </CustomText>
          </CustomButton>
          <CustomButton
            variant="green"
            onPress={() => {}}
            extraStyle={styles.greenBtn}
          >
            <CustomText extraStyle={styles.footerButtonText}>+</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default CounterScreen;
