import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { setOnboardingCompleted } from '../../../../store/slices/onboardingSlice';
import { RootStackParamList } from '../../../../navigation/types';

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'PremiumPaymentScreen'>;

export const usePaymentLogic = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<PaymentScreenRouteProp>();
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  const cameFromHomeScreen = route.params?.cameFrom === 'HomeScreen';

  const handlePlanSelect = (plan: 'yearly' | 'monthly') => {
    setSelectedPlan(plan);
  };

  const handleContinue = () => {
    console.log("Try free for 3 days button pressed");
  };

  const handleClose = () => {
    if (cameFromHomeScreen) {
      navigation.goBack();
    } else {
      dispatch(setOnboardingCompleted());
    }
  };

  return {
    selectedPlan,
    cameFromHomeScreen,
    handlePlanSelect,
    handleContinue,
    handleClose,
  };
}; 