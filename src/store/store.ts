import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import userReducer from './slices/userSlice';
import apiReducer from './slices/apiSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['onboarding'], // Sadece onboarding state'ini persist et
};

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  user: userReducer,
  api: apiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

// Redux persist ile uyumlu type definitions
export type RootState = {
  onboarding: ReturnType<typeof onboardingReducer>;
  user: ReturnType<typeof userReducer>;
  api: ReturnType<typeof apiReducer>;
};

export type AppDispatch = typeof store.dispatch; 