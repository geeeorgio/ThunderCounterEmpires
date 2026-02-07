import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import BinIcon from '../CustomIcons/BinIcon';
import SaveIcon from '../CustomIcons/SaveIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { TaskType } from 'src/types';
import { formatDateForTask, formatTimeForTask, hp, wp } from 'src/utils';

interface TaskItemProps {
  task: TaskType;
  onToggleFavorite: (taskId: string) => void;
  isEditing?: boolean;
  onDeletePress: (taskId: string) => void;
  onIncrement: (taskId: string, currentNumber: number) => void;
  onDecrement: (taskId: string, currentNumber: number) => void;
}

const TaskItem = ({
  task,
  onToggleFavorite,
  isEditing,
  onDeletePress,
  onIncrement,
  onDecrement,
}: TaskItemProps) => {
  return (
    <View style={styles.swipeWrapper}>
      <View style={[styles.container, isEditing && styles.editingContainer]}>
        <View style={styles.taskInfoContainer}>
          <CustomText extraStyle={styles.taskTitle}>{task.title}</CustomText>
        </View>
        <View style={styles.taskStatusContainer}>
          <View style={styles.taskNumber}>
            <CustomText extraStyle={styles.taskNumberText}>
              {task.number}
            </CustomText>
          </View>
          <CustomButton
            variant="green"
            onPress={() => onIncrement(task.id, task.number)}
            extraStyle={styles.taskStatusBtn}
          >
            <CustomText extraStyle={styles.taskStatusBtnText}>+</CustomText>
          </CustomButton>
          <CustomButton
            variant="grey"
            onPress={() => onDecrement(task.id, task.number)}
            extraStyle={styles.taskStatusBtn}
          >
            <CustomText extraStyle={styles.taskStatusBtnText}>-</CustomText>
          </CustomButton>
        </View>

        <View style={styles.taskFooter}>
          <View style={styles.taskDate}>
            <CustomText extraStyle={styles.taskText}>
              {formatDateForTask(task.createdAt)}
            </CustomText>
          </View>
          <View style={styles.taskTime}>
            <CustomText extraStyle={styles.taskText}>
              {formatTimeForTask(task.createdAt)}
            </CustomText>
          </View>
          <CustomButton
            onPress={() => onToggleFavorite(task.id)}
            extraStyle={[styles.saveBtn, task.isFavorite && styles.favoriteBtn]}
          >
            <SaveIcon
              width={wp(18)}
              height={hp(18)}
              color={task.isFavorite ? COLORS.purple_main : COLORS.white}
            />
          </CustomButton>
        </View>
      </View>

      <CustomButton
        variant="red"
        onPress={() => onDeletePress(task.id)}
        extraStyle={[styles.deleteBtn, isEditing && styles.editingDeleteBtn]}
      >
        <BinIcon width={wp(28)} height={hp(28)} color={COLORS.white} />
      </CustomButton>
    </View>
  );
};

export default TaskItem;
