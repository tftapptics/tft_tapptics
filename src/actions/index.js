export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const setError = message => ({
  type: 'SET_ERROR',
  message
});

export const setChampions = champs => ({
  type: 'SET_CHAMPIONS',
  champs
});

export const setRoster = champ => ({
  type: 'SET_ROSTER',
  champ
});

export const setSynergies = synergies => ({
  type: 'SET_SYNERGIES',
  synergies
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});