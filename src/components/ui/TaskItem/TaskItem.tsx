import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import SaveIcon from '../CustomIcons/SaveIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { TaskType } from 'src/types';
import { formatDateForTask, formatTimeForTask, hp, wp } from 'src/utils';

interface TaskItemProps {
  task: TaskType;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <View style={styles.container}>
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
          onPress={() => {}}
          extraStyle={styles.taskStatusBtn}
        >
          <CustomText extraStyle={styles.taskStatusBtnText}>+</CustomText>
        </CustomButton>
        <CustomButton
          variant="grey"
          onPress={() => {}}
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
        <CustomButton onPress={() => {}} extraStyle={styles.saveBtn}>
          <SaveIcon width={wp(18)} height={hp(18)} />
        </CustomButton>
      </View>
    </View>
  );
};

export default TaskItem;
