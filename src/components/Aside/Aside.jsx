import React from 'react';
import aside from './Aside.module.css';
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <aside className={aside.aside}>
      <nav>
        <ul>
          <li><NavLink to="/profile" activeClassName={aside.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={aside.active}>Messages</NavLink></li>
          <li><NavLink to="/music" activeClassName={aside.active}>Music</NavLink></li>
          <li><NavLink to="/news" activeClassName={aside.active}>News</NavLink></li>
          <li><NavLink to="/settings" activeClassName={aside.active}>Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside;