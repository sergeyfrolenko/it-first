const HANDLE_TITLE = 'handle-title'

const initialState = {
  title: 'test'
}

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TITLE:
      let stateCopy = { ...state }
      stateCopy.title = { ...state.title }
      stateCopy.title = action.title
      return stateCopy
    default:
      return state
  }
}


export const handleTitleAction = (txt) => ({ type: HANDLE_TITLE, title: txt })

export default videoReducer