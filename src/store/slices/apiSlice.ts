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



export interface Category {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: {
    url: string;
  };
}

interface ApiState {
  questionsLoading: boolean;
  questions: Question[] | null;
  questionsError: string | null;
  categories: Category[] | null;
  categoriesLoading: boolean;
  categoriesError: string | null;
}

const initialState: ApiState = {
  questionsLoading: false,
  questions: null,
  questionsError: null,
  categories: null,
  categoriesLoading: false,
  categoriesError: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    resetApi: (state) => {
      state.questionsLoading = false;
      state.questions = null;
      state.questionsError = null;
      state.categoriesLoading = false;
      state.categories = null;
      state.categoriesError = null;
    },
    setQuestionsLoading: (state, action: PayloadAction<boolean>) => {
      state.questionsLoading = action.payload;
    },
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.questionsLoading = false;
      state.questionsError = null;
    },
    setQuestionsError: (state, action: PayloadAction<string | null>) => {
      state.questionsLoading = false;
      state.questionsError = action.payload;
    },
    setCategoriesLoading: (state, action: PayloadAction<boolean>) => {
      state.categoriesLoading = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categoriesLoading = false;
      state.categories = action.payload;
      state.categoriesError = null;
    },
    setCategoriesError: (state, action: PayloadAction<string | null>) => {
      state.categoriesLoading = false;
      state.categoriesError = action.payload;
    },
  },
});

export const {
  resetApi,
  setQuestionsLoading,
  setQuestions,
  setQuestionsError,
  setCategoriesLoading,
  setCategories,
  setCategoriesError,
} = apiSlice.actions;

export default apiSlice.reducer; 