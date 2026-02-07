import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform } from 'react-native';

import { useGameContext } from './useGameContext';

import type { TaskType } from 'src/types';

export const useCounterLogic = () => {
  const {
    contextTasks,
    addContextTask,
    deleteContextTask,
    toggleFavoriteTask,
    updateTask,
  } = useGameContext();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');

  const [isSavedTasksVisible, setIsSavedTasksVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleOpenForm = () => {
    setNewTitle('');
    setNewDate(new Date());
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setShowPicker(false);
  };

  const handleSaveTask = () => {
    if (!newTitle.trim()) return;

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
      isFavorite: false,
    };

    addContextTask(newTask);
    handleCloseForm();
  };

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') setShowPicker(false);
    if (event.type !== 'dismissed' && selectedDate) setNewDate(selectedDate);
  };

  const handleDatePress = () => {
    setPickerMode('date');
    setShowPicker(true);
  };

  const handleTimePress = () => {
    setPickerMode('time');
    setShowPicker(true);
  };

  const handleDeletePress = (taskId: string) => {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteContextTask(taskToDelete);
      setShowDeleteModal(false);
      setTaskToDelete(null);
    }
  };

  const handleOnSavedPress = () => {
    setIsSavedTasksVisible((prev) => !prev);
  };

  const handleOnEditPress = () => {
    setIsEditing((prev) => !prev);
  };

  const incrementCount = (taskId: string, currentNumber: number) => {
    updateTask(taskId, { number: currentNumber + 1 });
  };

  const decrementCount = (taskId: string, currentNumber: number) => {
    if (currentNumber > 0) {
      updateTask(taskId, { number: currentNumber - 1 });
    }
  };

  const displayedTasks = isSavedTasksVisible
    ? contextTasks.filter((task) => task.isFavorite)
    : contextTasks;

  const isListEmpty = contextTasks.length === 0;
  const isSavedListEmpty = isSavedTasksVisible && displayedTasks.length === 0;

  return {
    displayedTasks,
    isListEmpty,
    isSavedListEmpty,
    newTitle,
    newDate,
    //
    isFormVisible,
    showPicker,
    pickerMode,
    isSavedTasksVisible,
    isEditing,
    showDeleteModal,
    //
    setNewTitle,
    setShowDeleteModal,
    //
    handleOpenForm,
    handleCloseForm,
    handleSaveTask,
    handleDatePress,
    handleTimePress,
    onChangeDate,
    handleDeletePress,
    handleConfirmDelete,
    handleOnSavedPress,
    handleOnEditPress,
    toggleFavoriteTask,
    //
    incrementCount,
    decrementCount,
  };
};
