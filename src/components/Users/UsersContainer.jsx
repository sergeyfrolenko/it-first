import React from 'react';
import { connect } from 'react-redux'

import { changeFollowAC, setUsersAC } from './../../redux/users-reducer';

import Users from './Users';

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (userId) => {
      dispatch(changeFollowAC(userId))
    },
    setUsers: (data) => {
      dispatch(setUsersAC(data))
    }
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;