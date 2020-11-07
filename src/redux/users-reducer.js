const CHANGE_FOLLOW = 'change-follow'
const SET_USERS = 'set-users'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   avaUrl: 'https://sun9-52.userapi.com/c850608/v850608887/310d5/k9lYlqWpa_4.jpg',
    //   isFollow: false,
    //   name: 'name',
    //   status: 'status string',
    //   location: {
    //     city: 'Orenburg',
    //     country: 'Russia'
    //   }
    // }
  ]
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed }
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.data
      }
    default:
      return state
  }
}


export const changeFollowAC = (userId) => ({ type: CHANGE_FOLLOW, userId })
export const setUsersAC = (data) => ({ type: SET_USERS, data })

export default usersReducer