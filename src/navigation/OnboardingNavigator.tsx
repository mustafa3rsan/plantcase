import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Onboarding Screens
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import FeatureScreen from '../screens/onboarding/FeatureScreen';
import StepsScreen from '../screens/onboarding/StepsScreen';
import PaymentScreen from '../screens/onboarding/PaymentScreen/PaymentScreen';

const Stack = createStackNavigator();

const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
      />
      <Stack.Screen 
        name="Feature" 
        component={FeatureScreen} 
      />
      <Stack.Screen 
        name="Steps" 
        component={StepsScreen} 
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen} 
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator; 