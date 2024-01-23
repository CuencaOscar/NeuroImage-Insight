import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { LightTheme, DarkTheme } from './src/styles/themes';

const App = () => {
  const [isDarkTheme, _] = useState(false);
  const theme = useMemo(() => (isDarkTheme ? DarkTheme : LightTheme), [isDarkTheme]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;