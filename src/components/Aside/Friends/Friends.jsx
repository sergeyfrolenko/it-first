import React from 'react'
import s from './Friends.module.css'
import { NavLink } from 'react-router-dom'

const Friends = (props) => {
  const getFriends = () => {
    return props.state.friends.map((el, key) => {
      return (
        <li key={key}>
          <NavLink to={'/profile/' + el.id}>
            {el.name}
            <span className={s.ava}></span>
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div>
      <ul className={s.list}>
        {getFriends()}
      </ul>
    </div>
  )
}

export default Friends;