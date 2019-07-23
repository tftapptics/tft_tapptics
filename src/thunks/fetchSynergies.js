import { fetchData } from '../api/fetchData';
import { isLoading, setError, setSynergies } from '../actions';

export const fetchSynergies = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const data = await fetchData(url);
      dispatch(setSynergies(data.data));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}