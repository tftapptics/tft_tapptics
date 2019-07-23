export const setRoster = (state = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] , action) => {
  switch(action.type) {
    case 'SET_ROSTER':
      return action.champ
    case 'UPDATE_ROSTER':
      console.log("hello world how are you doing")
      console.log(action.index)
      console.log(action.charInfo)
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