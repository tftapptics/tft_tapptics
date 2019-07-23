export const dragIndex = (state = 0, action) => {
  switch(action.type) {
    case 'SET_CURRENT_DRAG_INDEX':
      return action.index
    default:
      return state
  }
}