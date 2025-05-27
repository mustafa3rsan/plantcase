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
  const isOnboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.isCompleted
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboardingCompleted ? (
          <Stack.Screen 
            name="Onboarding" 
            component={OnboardingNavigator} 
          />
        ) : (
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 