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

// Ana uygulama bileşeni
export default function App() {
  // Google Fonts'tan Rubik font ailesi yükleniyor
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': Rubik_400Regular,
    'Rubik-Medium': Rubik_500Medium,
    'Rubik-Bold': Rubik_700Bold,
  });

  // Fontlar yüklenene kadar loading gösterimi
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#28AF6E" />
      </View>
    );
  }

  // Redux store ve persist gate ile uygulama sarmalanıyor
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
