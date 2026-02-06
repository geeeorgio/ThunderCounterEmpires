import { FlatList, View } from 'react-native';

import TaskItem from '../TaskItem/TaskItem';

import { styles } from './styles';

import type { TaskType } from 'src/types';

interface TasksListProps {
  tasks: TaskType[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContentContainer}
      ListFooterComponent={<View style={styles.listFooterContainer} />}
    />
  );
};

export default TasksList;
