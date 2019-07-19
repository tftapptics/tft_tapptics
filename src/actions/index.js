export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const setError = message => ({
  type: 'SET_ERROR',
  message
})

export const setChampions = champs => ({
  type: 'SET_CHAMPIONS',
  champs
})