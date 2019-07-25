const dumbyData = {
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  }
  ,attributes: {
    model_img: ''
  }
  ,
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  },
  attributes: {
    model_img: ''
  }
}

export const setRoster = (state = [dumbyData] , action) => {
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