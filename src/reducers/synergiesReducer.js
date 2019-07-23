export const synergies = (state = [], action) => {
  switch(action.type){
    case 'SET_SYNERGIES':
      return action.synergies
    default:
      return state
  }
}