const initialState = {
  friends: [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ]
}

const asideReducer = (state = initialState, action) => {
  return state
}

export default asideReducer