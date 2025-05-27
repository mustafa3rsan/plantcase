import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userData: any | null;
  preferences: Record<string, any>;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  userData: null,
  preferences: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    updatePreferences: (state, action: PayloadAction<Record<string, any>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearUserData: (state) => {
      state.userData = null;
      state.preferences = {};
      state.isLoggedIn = false;
    },
  },
});

export const {
  setUserData,
  updatePreferences,
  clearUserData,
} = userSlice.actions;

export default userSlice.reducer; 