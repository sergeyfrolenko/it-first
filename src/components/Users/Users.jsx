import React from 'react'
import * as axios from 'axios'

import s from './Users.module.css'
import userAva from '../../assets/images/userAva.png';

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3')
      .then((res) => {
        this.props.setUsers(res.data.items)
      })
  }

  getUsers = () => {
    return (
      this.props.users.map((el) => {
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
                  <button onClick={() => { this.props.changeFollow(el.id) }}>
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
  render() {
    return (
      <div className={s.users}>
        <h1>Users</h1>
        <ul>
          {this.getUsers()}
        </ul>
      </div>
    )
  }
}

export default Users;