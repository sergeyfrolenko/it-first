const state = {
  profilePage: {
    posts: [
      { id: 1, msg: "hello", title: "first", likes: 15 },
      { id: 1, msg: "hi", title: "second", likes: 20 },
      { id: 1, msg: "how are you?", title: "third", likes: 18 }
    ]
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

export default state;