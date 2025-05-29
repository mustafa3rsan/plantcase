import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Yeni Interface'ler
export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

// Kategori interface'i (şimdilik kullanılmıyor ama gelecekte eklenebilir)
// export interface Category {
//   id: string;
//   name: string;
//   // ... diğer alanlar
// }

interface ApiState {
  questionsLoading: boolean;
  questions: Question[] | null;
  questionsError: string | null;
}

const initialState: ApiState = {
  questionsLoading: false,
  questions: null,
  questionsError: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    resetApi: (state) => {
      state.questionsLoading = false;
      state.questions = null;
      state.questionsError = null;
    },
    setQuestionsLoading: (state, action: PayloadAction<boolean>) => {
      state.questionsLoading = action.payload;
    },
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.questionsLoading = false;
      state.questionsError = null;
    },
    setQuestionsError: (state, action: PayloadAction<string>) => {
      state.questionsError = action.payload;
      state.questionsLoading = false;
    },
  },
});

export const {
  resetApi,
  setQuestionsLoading,
  setQuestions,
  setQuestionsError,
} = apiSlice.actions;

export default apiSlice.reducer; 