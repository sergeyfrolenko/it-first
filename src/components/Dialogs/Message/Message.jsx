import React from 'react';

import s from './Message.module.css';

const Message = () => {
  return (
    <div className={s.message}>
      <div className={s.ava}>
        <img src="https://i.pinimg.com/736x/33/85/f2/3385f2e1ae928f80fda6304ce36c6165--avatar-makeup-film-avatar.jpg" alt="" />
      </div>
      <div className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facere eius iste officia porro quisquam distinctio eligendi illum hic aspernatur? Aliquid reiciendis quas, quo explicabo inventore dolorem animi voluptatem laborum?
      </div>
    </div>
  )
}

export default Message;