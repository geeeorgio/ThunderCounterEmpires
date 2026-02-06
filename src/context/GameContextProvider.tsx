import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BG_IMAGE } from 'src/constants';
import { STORIES } from 'src/constants/stories';
import { GameContext } from 'src/hooks/useGameContext';
import type { Story, TaskType } from 'src/types';
import { getItemFromStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameBackground, _] = useState<ImageSourcePropType>(MAIN_BG_IMAGE);
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [contextStories, __] = useState<Story[]>(STORIES);
  const [contextTasks, setContextTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const [isOnboardingCompleted, savedTasks] = await Promise.all([
          getItemFromStorage<boolean>('is_onboarding_completed'),
          getItemFromStorage<TaskType[]>('saved_tasks'),
        ]);

        if (isOnboardingCompleted !== null) {
          setOnboardingDone(true);
        }

        if (savedTasks !== null) {
          setContextTasks(savedTasks);
        }
      } catch (e) {
        console.error('Error initializing game context:', e);
      }
    };

    init();
  }, []);

  const addContextTask = (task: TaskType) => {
    setContextTasks((prev) => [...prev, task]);
  };

  const deleteContextTask = (taskId: string) => {
    setContextTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const contextValue = useMemo(
    () => ({
      contextBackground: gameBackground,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted: setOnboardingDone,
      contextStories,
      contextTasks,
      addContextTask,
      deleteContextTask,
    }),
    [gameBackground, onboardingDone, contextStories, contextTasks],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
