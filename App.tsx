import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, ActivityIndicator } from 'react-native';
import { store, persistor } from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { 
  Rubik_400Regular, 
  Rubik_500Medium, 
  Rubik_700Bold 
} from '@expo-google-fonts/rubik';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': Rubik_400Regular,
    'Rubik-Medium': Rubik_500Medium,
    'Rubik-Bold': Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#28AF6E" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate 
        loading={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#28AF6E" />
          </View>
        } 
        persistor={persistor}
      >
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
