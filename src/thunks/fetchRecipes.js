import { fetchData } from '../api/fetchData';
import { isLoading, setError, setRecipes } from '../actions';

export const fetchRecipes = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const data = await fetchData(url);
      console.log(data.data)
      dispatch(setRecipes(data.data));
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(setError(error.message))
    }
  } 
}