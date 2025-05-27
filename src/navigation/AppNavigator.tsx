import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Screens
import OnboardingNavigator from './OnboardingNavigator';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  // Test modu için onboarding kontrolünü kaldırdık
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingNavigator} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 