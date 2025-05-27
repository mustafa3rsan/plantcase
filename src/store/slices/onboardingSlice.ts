import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  isCompleted: boolean;
  currentStep: number;
  paymentScreenVisible: boolean;
}

const initialState: OnboardingState = {
  isCompleted: false,
  currentStep: 0,
  paymentScreenVisible: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingCompleted: (state) => {
      state.isCompleted = true;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    showPaymentScreen: (state) => {
      state.paymentScreenVisible = true;
    },
    hidePaymentScreen: (state) => {
      state.paymentScreenVisible = false;
    },
    resetOnboarding: (state) => {
      state.isCompleted = false;
      state.currentStep = 0;
      state.paymentScreenVisible = false;
    },
  },
});

export const {
  setOnboardingCompleted,
  setCurrentStep,
  showPaymentScreen,
  hidePaymentScreen,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer; 