export const itemName = (state = '', action) => {
  switch(action.type) {
    case 'SET_ITEM_NAME':
      return action.name
    default:
      return state
  }
}