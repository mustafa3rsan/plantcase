import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import {
  setQuestionsLoading,
  setQuestions,
  setQuestionsError,
  Question,
} from '../../../store/slices/apiSlice';

export const useQuestions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, questionsLoading, questionsError } = useSelector((state: RootState) => state.api);

  const fetchQuestionsData = async () => {
    try {
      dispatch(setQuestionsLoading(true));
      const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
      if (!response.ok) {
        throw new Error('API yanıtı başarılı değil: ' + response.status);
      }
      const questionsData: Question[] = await response.json();
      dispatch(setQuestions(questionsData));
    } catch (error: any) {
      dispatch(setQuestionsError(error.message || 'Soru verileri yüklenirken bir hata oluştu'));
    }
  };

  useEffect(() => {
    fetchQuestionsData();
  }, [dispatch]);

  return {
    questions,
    questionsLoading,
    questionsError,
    refetchQuestions: fetchQuestionsData,
  };
}; 