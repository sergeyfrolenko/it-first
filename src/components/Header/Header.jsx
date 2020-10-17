import React from 'react';

import header from './Header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
      <img src="https://brandonlehr.com/static/2c43f525a09aa37545746d98ef6388ad/85cf5/react_logo-300x300.png" />
    </header>
  )
}

export default Header;