import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiState {
  loading: boolean;
  data: any | null;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  data: null,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetApi: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setData,
  setError,
  clearError,
  resetApi,
} = apiSlice.actions;

export default apiSlice.reducer; 