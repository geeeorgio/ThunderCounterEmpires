import type { ImageSourcePropType } from 'react-native';

export type Story = {
  id: string;
  title: string;
  description: string;
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isSkipped: boolean;
  isFailed: boolean;
  isInProgress: boolean;
  createdAt: Date;
};

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
};
