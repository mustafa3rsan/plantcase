import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import {
  setCategoriesLoading,
  setCategories,
  setCategoriesError,
  Category,
} from '../../../store/slices/apiSlice';

export const useCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, categoriesLoading, categoriesError } = useSelector((state: RootState) => state.api);

  const fetchCategoriesData = async () => {
    try {
      dispatch(setCategoriesLoading(true));
      const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
      if (!response.ok) {
        throw new Error('API yanıtı başarılı değil: ' + response.status);
      }
      const responseData = await response.json();
      const categoriesData: Category[] = responseData.data;
      dispatch(setCategories(categoriesData));
    } catch (error: any) {
      dispatch(setCategoriesError(error.message || 'Kategori verileri yüklenirken bir hata oluştu'));
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, [dispatch]);

  return {
    categories,
    categoriesLoading,
    categoriesError,
    refetchCategories: fetchCategoriesData,
  };
}; 