import DateTimePicker from '@react-native-community/datetimepicker';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Keyboard, Platform, Pressable, View } from 'react-native';

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
import type { MainStackNavigationProp, TaskType } from 'src/types';

const CounterScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { contextTasks, addContextTask } = useGameContext();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');

  const handleOpenForm = () => {
    setNewTitle('');
    setNewDate(new Date());
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setShowPicker(false);
  };

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }

    if (event.type !== 'dismissed' && selectedDate) {
      setNewDate(selectedDate);
    }
  };

  const handleDatePress = () => {
    setPickerMode('date');
    setShowPicker(true);
  };

  const handleTimePress = () => {
    setPickerMode('time');
    setShowPicker(true);
  };

  const handleSaveTask = () => {
    if (!newTitle.trim()) {
      return;
    }

    const newTask: TaskType = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      number: 0,
      description: '',
      createdAt: newDate,
      isCompleted: false,
      isSkipped: false,
      isFailed: false,
      isInProgress: false,
    };

    addContextTask(newTask);
    setIsFormVisible(false);
    setShowPicker(false);
    setNewTitle('');
    setNewDate(new Date());
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
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
            <CustomButton
              onPress={handleOpenForm}
              extraStyle={styles.addTaskBtn}
            >
              <CustomText extraStyle={styles.addTaskBtnText}>
                Add count
              </CustomText>
            </CustomButton>
          )}

          {isFormVisible && (
            <>
              <TaskInput
                title={newTitle}
                date={newDate}
                onChangeTitle={setNewTitle}
                onDatePress={handleDatePress}
                onTimePress={handleTimePress}
                onSave={handleSaveTask}
                onCancel={handleCloseForm}
              />
              {showPicker && (
                <DateTimePicker
                  value={newDate}
                  mode={pickerMode}
                  display="spinner"
                  onChange={onChangeDate}
                />
              )}
            </>
          )}

          <View style={styles.footerButtons}>
            <CustomButton
              variant="purple_main"
              onPress={() => navigation.navigate('StoriesScreen')}
              extraStyle={styles.purpleBtn}
            >
              <CustomText extraStyle={styles.footerButtonText}>
                Productivity
              </CustomText>
            </CustomButton>
            <CustomButton
              variant="green"
              onPress={handleOpenForm}
              extraStyle={styles.greenBtn}
            >
              <CustomText extraStyle={styles.footerButtonText}>+</CustomText>
            </CustomButton>
          </View>
        </CustomContainer>
      </CustomScreenWrapper>
    </Pressable>
  );
};

export default CounterScreen;
