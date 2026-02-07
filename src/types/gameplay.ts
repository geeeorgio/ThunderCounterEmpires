import type { ImageSourcePropType } from 'react-native';

export type Story = {
  id: string;
  title: string;
  description: string;
};

export type TaskType = {
  id: string;
  title: string;
  number: number;
  description: string;
  isCompleted: boolean;
  isSkipped: boolean;
  isFailed: boolean;
  isInProgress: boolean;
  createdAt: Date;
  isFavorite: boolean;
};

export type SortType = 'date' | 'title' | 'countedMore' | 'countedLess';

export type SortOrder = 'asc' | 'desc';

export type GameContextType = {
  contextBackground: ImageSourcePropType;
  //
  isContextOnboardingCompleted: boolean;
  setIsContextOnboardingCompleted: (value: boolean) => void;
  //
  contextStories: Story[];
  //
  contextTasks: TaskType[];
  addContextTask: (task: TaskType) => void;
  deleteContextTask: (taskId: string) => void;
  updateTask: (taskId: string, updates: Partial<TaskType>) => void;
  //
  toggleFavoriteTask: (taskId: string) => void;
  //
  isLoading: boolean;
};
