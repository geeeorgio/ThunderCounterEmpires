import { FlatList, View } from 'react-native';

import TaskItem from '../TaskItem/TaskItem';

import { styles } from './styles';

import type { TaskType } from 'src/types';

interface TasksListProps {
  tasks: TaskType[];
  onToggleFavorite: (taskId: string) => void;
  isEditing?: boolean;
  onDeletePress: (taskId: string) => void;
  onIncrement: (taskId: string, currentNumber: number) => void;
  onDecrement: (taskId: string, currentNumber: number) => void;
}

const TasksList = ({
  tasks,
  onToggleFavorite,
  isEditing,
  onDeletePress,
  onIncrement,
  onDecrement,
}: TasksListProps) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggleFavorite={onToggleFavorite}
          isEditing={isEditing}
          onDeletePress={() => onDeletePress(item.id)}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContentContainer}
      ListFooterComponent={<View style={styles.listFooterContainer} />}
    />
  );
};

export default TasksList;
