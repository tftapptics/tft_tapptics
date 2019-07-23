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

})

export const setCurrentDragIndex = index => ({
  type: 'SET_CURRENT_DRAG_INDEX',
  index
})

export const setCurrentRosterIndex = index => ({
  type: 'SET_CURRENT_ROSTER_INDEX',
  index
})

export const upDateRosterInfo = (index, charInfo) => ({
  type: 'UPDATE_ROSTER',
  index,
  charInfo
});

export const setSynergies = synergies => ({
  type: 'SET_SYNERGIES',
  synergies
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});

