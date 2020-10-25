let rerenderEntireTree = () => {
  console.log('all right')
}

const state = {
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
    ]
  },
  asideModule: {
    friends: [
      { id: 1, name: 'One' },
      { id: 2, name: 'Two' },
      { id: 3, name: 'Three' }
    ]
  }
}

export const addPost = (text) => {
  let post = {
    id: 4, msg: text, title: "four", likes: 1
  }
  state.profilePage.posts.push(post)

  rerenderEntireTree(state)
}
export const addMsg = (text) => {
  let msg = {
    id: new Date(), msg: text
  }
  state.dialogsPage.msgsData.push(msg)

  rerenderEntireTree(state)
}
export const updateAddPostValue = (text) => {
  state.profilePage.addPostValue = text

  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;