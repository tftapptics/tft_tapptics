export const rosterIndex = (state = 0, action) => {
  switch(action.type) {
    case 'SET_CURRENT_ROSTER_INDEX':
      return action.index
    default:
      return state
  }
}