import { useContext } from 'react';

import { GameContext } from 'src/context/GameContextProvider';
import type { GameContextType } from 'src/types';

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }
  return context;
};
