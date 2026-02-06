import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GameBackground } from './components';
import GameContextProvider from './context/GameContextProvider';
import RootNavigator from './navigation/RootNavigator';

export const App = () => {
  return (
    <GameContextProvider>
      <GameBackground>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GameBackground>
    </GameContextProvider>
  );
};

export default App;
