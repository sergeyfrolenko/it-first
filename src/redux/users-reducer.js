const CHANGE_FOLLOW = 'change-follow'
const SET_USERS = 'set-users'
const CURRENT_PAGE = 'current-page'
const BUTTON_ARROW = 'button-arrow'

let initialState = {
  users: [],
  currentPage: 1
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
    case CURRENT_PAGE: {
      return {
        ...state,
        currentPage: +action.num
      }
    }
    case BUTTON_ARROW: {
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    }
    default:
      return state
  }
}


export const changeFollowAC = (userId) => ({ type: CHANGE_FOLLOW, userId })
export const setUsersAC = (data) => ({ type: SET_USERS, data })
export const setCurrentPageAC = (num) => ({ type: CURRENT_PAGE, num })
export const handlerPaginationArrowAC = (btn) => ({ type: BUTTON_ARROW, btn })

export default usersReducer