import React from 'react';

import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.ava}>
        <img src="https://i.pinimg.com/736x/33/85/f2/3385f2e1ae928f80fda6304ce36c6165--avatar-makeup-film-avatar.jpg" alt="a" />
      </div>
      <div className={s.text}>
        {props.msg}
      </div>
    </div>
  )
}

export default Message;