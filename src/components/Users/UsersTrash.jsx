import React from 'react'
import * as axios from 'axios'

import s from './Users.module.css'
import userAva from '../../assets/images/userAva.png';

const Users = (props) => {
  const setUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3')
      .then((res) => {
        props.setUsers(res.data.items)
      })
  }

  const changeFollow = (userId) => {
    props.changeFollow(userId)
  }

  const getUsers = () => {
    return (
      props.users.map((el) => {
        return (
          <li key={el.id} className={s.listItem}>
            <div className={s.wrapper}>
              <div className="leftSection">
                <div className={s.ava}>
                  <img
                    src={el.photos.small === null ? userAva : el.photos.small} alt="avatar"
                  />
                </div>
                <div className="btnFollow">
                  <button onClick={() => { changeFollow(el.id) }}>
                    {el.followed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
              </div>

              <div className="centerSection">
                <h3>{el.name}</h3>
                <p>{el.status}</p>
              </div>

              <div className="rightSection">
                {/* <ul>
                  <li>{el.location.city}</li>
                  <li>{el.location.country}</li>
                </ul> */}
              </div>
            </div>
          </li>
        )
      })
    )
  }

  return (
    <div className={s.users}>
      <h1>Users</h1>
      <button onClick={setUsers}>set users</button>
      <ul>
        {getUsers()}
      </ul>
    </div>
  )
}

export default Users;