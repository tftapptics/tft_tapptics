const dumbyData = {
  attributes: {
    model_img: '',
    origin_class_types: []
  }
}

export const setRoster = (state = [dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData, dumbyData] , action) => {
  switch(action.type) {
    case 'SET_ROSTER':
      return action.champ
    case 'UPDATE_ROSTER':
      return state.map((rosterPoint, idx) => {
        if(action.index === idx) {
          return action.charInfo
        } else {
          return rosterPoint
        }
      })
    default:
      return state
  }
}