export const setRoster = (state = [], action) => {
  switch(action.type) {
    case 'SET_ROSTER':
      return action.champ
    default:
      return state
  }
}