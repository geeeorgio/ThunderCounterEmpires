import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BG_IMAGE } from 'src/constants';
import { STORIES } from 'src/constants/stories';
import { GameContext } from 'src/hooks/useGameContext';
import type { Story, TaskType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameBackground, _] = useState<ImageSourcePropType>(MAIN_BG_IMAGE);
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [contextStories, __] = useState<Story[]>(STORIES);
  const [contextTasks, setContextTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const [isOnboardingCompleted, savedTasks] = await Promise.all([
          getItemFromStorage<boolean>('is_onboarding_completed'),
          getItemFromStorage<TaskType[]>('saved_tasks'),
        ]);

        if (isOnboardingCompleted !== null) {
          setOnboardingDone(isOnboardingCompleted);
        }

        if (savedTasks !== null) {
          setContextTasks(savedTasks);
        }
      } catch (e) {
        console.error('Error initializing game context:', e);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  const handleSetOnboardingCompleted = (value: boolean) => {
    setOnboardingDone(value);
    setItemInStorage('is_onboarding_completed', value);
  };

  useEffect(() => {
    if (!isLoading) {
      setItemInStorage('saved_tasks', contextTasks);
    }
  }, [contextTasks, isLoading]);

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
      setIsContextOnboardingCompleted: handleSetOnboardingCompleted,
      contextStories,
      contextTasks,
      addContextTask,
      deleteContextTask,
      isLoading,
    }),
    [gameBackground, onboardingDone, contextStories, contextTasks, isLoading],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
