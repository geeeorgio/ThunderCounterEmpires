import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  ActionButtons,
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  TaskInput,
  TaskModal,
  TasksList,
} from 'src/components';
import { useCounterLogic } from 'src/hooks/useCounterLogic';
import type { MainStackNavigationProp } from 'src/types';

const CounterScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const logic = useCounterLogic();

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader />
      <CustomContainer
        variant="purple_main"
        extraStyle={styles.contentContainer}
      >
        <ActionButtons
          onSortPress={logic.handleOnSortPress}
          handleSortSelect={logic.handleSortSelect}
          isSorting={logic.isSorting}
          sortType={logic.sortType}
          onEditPress={logic.handleOnEditPress}
          isEditing={logic.isEditing}
          onSavedPress={logic.handleOnSavedPress}
          isSavedActive={logic.isSavedTasksVisible}
        />

        {logic.isSavedListEmpty && (
          <View style={styles.noSavedTasksContainer}>
            <CustomText extraStyle={styles.noSavedTasksText}>
              No favorites yet. {'\n'} Saved tasks will appear here.
            </CustomText>
          </View>
        )}

        {!logic.isListEmpty && !logic.isFormVisible && (
          <TasksList
            tasks={logic.displayedTasks}
            onToggleFavorite={logic.toggleFavoriteTask}
            isEditing={logic.isEditing}
            onDeletePress={logic.handleDeletePress}
            onIncrement={logic.incrementCount}
            onDecrement={logic.decrementCount}
          />
        )}

        {logic.isListEmpty && !logic.isFormVisible && (
          <CustomButton
            onPress={logic.handleOpenForm}
            extraStyle={styles.addTaskBtn}
          >
            <CustomText extraStyle={styles.addTaskBtnText}>
              Add count
            </CustomText>
          </CustomButton>
        )}

        {logic.isFormVisible && (
          <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <TaskInput
              title={logic.newTitle}
              date={logic.newDate}
              onChangeTitle={logic.setNewTitle}
              onDatePress={logic.handleDatePress}
              onTimePress={logic.handleTimePress}
              onSave={logic.handleSaveTask}
              onCancel={logic.handleCloseForm}
            />
            {logic.showPicker && (
              <DateTimePicker
                value={logic.newDate}
                mode={logic.pickerMode}
                display="spinner"
                onChange={logic.onChangeDate}
              />
            )}
          </Pressable>
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
            onPress={logic.handleOpenForm}
            extraStyle={styles.greenBtn}
          >
            <CustomText extraStyle={styles.footerButtonText}>+</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
      <TaskModal
        visible={logic.showDeleteModal}
        onCloseModal={() => logic.setShowDeleteModal(false)}
        onDeleteTask={logic.handleConfirmDelete}
      />
    </CustomScreenWrapper>
  );
};

export default CounterScreen;
