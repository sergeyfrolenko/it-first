import React from 'react'
import aside from './Aside.module.css'
import { NavLink } from 'react-router-dom'

import Friends from './Friends/Friends'

const Aside = (props) => {
  return (
    <aside className={aside.aside}>
      <h3 className={aside.title}>Navigation</h3>
      <nav>
        <ul>
          <li><NavLink to="/profile" activeClassName={aside.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={aside.active}>Messages</NavLink></li>
          <li><NavLink to="/music" activeClassName={aside.active}>Music</NavLink></li>
          <li><NavLink to="/news" activeClassName={aside.active}>News</NavLink></li>
          <li><NavLink to="/settings" activeClassName={aside.active}>Settings</NavLink></li>
        </ul>
      </nav>

      <h3 className={aside.title}>Friends</h3>
      <Friends state={props.state} />

    </aside>
  )
}

export default Aside;