import React from 'react';
import aside from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={aside.aside}>
      <nav>
        <ul>
          <li><a href="profile" className={`${aside.nav} ${aside.active}`}>Profile</a></li>
          <li><a href="messages">Messages</a></li>
          <li><a href="music">Music</a></li>
          <li><a href="news">News</a></li>
          <li><a href="settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside;