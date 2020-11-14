import React from 'react';
import { connect } from 'react-redux'

import { changeFollowAC, setUsersAC, setCurrentPageAC, handlerPaginationArrowAC } from './../../redux/users-reducer';

import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (userId) => {
      dispatch(changeFollowAC(userId))
    },
    setUsers: (data) => {
      dispatch(setUsersAC(data))
    },
    setCurrentPage: (num) => {
      dispatch(setCurrentPageAC(num))
    },
    handlerPaginationArrow: (btn) => {
      dispatch(handlerPaginationArrowAC(btn))
    }
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;