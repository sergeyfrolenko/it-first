const ADD_MSG = 'add-msg'
const UPDATE_NEW_MSG_TEXT = 'update-new-msg-text'

const initialState = {
  namesData: [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ],
  msgsData: [
    { id: 1, msg: 'Hello Bro!' }
  ],
  // addMsgValue: ''
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG: {
      let stateCopy = { ...state }
      let msg = { id: new Date(), msg: stateCopy.addMsgValue }
      stateCopy.msgsData.push(msg)
      stateCopy.addMsgValue = ''
      return stateCopy
    }
    case UPDATE_NEW_MSG_TEXT: {
      let stateCopy = { ...state }
      stateCopy.addMsgValue = action.text
      return stateCopy
    }
    default:
      return state
  }
}

export const addMsgActionCreator = (text) => ({ type: ADD_MSG })
export const updateNewMsgValueActionCreator = (txt) => ({ type: UPDATE_NEW_MSG_TEXT, text: txt })

export default dialogReducer