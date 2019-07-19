export const champions = (state = [], action) => {
  switch(action.type) {
    case 'SET_CHAMPIONS':
      return action.champs
    default:
      return state
  }
}