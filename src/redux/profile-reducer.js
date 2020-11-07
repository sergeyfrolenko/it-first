const ADD_POST = 'add-post'
const UPDATE_NEW_POST_TEXT = 'update-new-post-text'

const initialState = {
  posts: [
    { id: 1, msg: "hello", title: "first", likes: 15 },
    { id: 2, msg: "hi", title: "second", likes: 20 },
    { id: 3, msg: "how are you?", title: "third", likes: 18 }
  ],
  addPostValue: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 4, msg: state.addPostValue, title: "four", likes: 1
      }
      state.posts.push(post)
      state.addPostValue = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.addPostValue = action.text
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostValueActionCreator = (txt) => ({ type: UPDATE_NEW_POST_TEXT, text: txt })

export default profileReducer