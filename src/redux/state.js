import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';


const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, msg: "hello", title: "first", likes: 15 },
        { id: 2, msg: "hi", title: "second", likes: 20 },
        { id: 3, msg: "how are you?", title: "third", likes: 18 }
      ],
      addPostValue: ''
    },
    dialogsPage: {
      namesData: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' }
      ],
      msgsData: [
        { id: 1, msg: 'Hello Bro!' }
      ],
      addMsgValue: ''
    },
    asideModule: {
      friends: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' }
      ]
    }
  },
  _rerenderEntireTree() {
    console.log('all right')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)

    this._rerenderEntireTree(this._state)
  }
}


export default store;