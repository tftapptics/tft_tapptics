import { fetchData } from '../api/fetchData';
import { isLoading, setError, setItems } from '../actions';

export const fetchItems = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const data = fetchData(url);
      dispatch(setItems(data.data));
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(setError(error.message))
    }
  } 
}