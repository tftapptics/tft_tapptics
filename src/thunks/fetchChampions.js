import { fetchData } from '../api/fetchData';
import { isLoading, setError, setChampions } from '../actions';

export const fetchChampions = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const data = await fetchData(url);
      dispatch(setChampions(data))
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}