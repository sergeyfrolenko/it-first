import React from 'react';
import { NavLink } from 'react-router-dom'

import s from './Name.module.css';


const Name = (props) => {
  return (
    <div className={s.name}>
      <NavLink to={'/dialogs/' + props.link} className={s.link} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>

  )
}

export default Name;