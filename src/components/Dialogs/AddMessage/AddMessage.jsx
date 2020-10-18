import React from 'react';

import s from './AddMessage.module.css';

let newMsg = React.createRef()

const addMsg = () => {
  console.log(newMsg.current.value)
}

const Message = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.title}>New message</div>
      <div className={s.area}>
        <textarea ref={newMsg} cols="30" rows="10"></textarea>
      </div>
      <div className={s.btn}>
        <button onClick={addMsg}>Add message</button>
      </div>
    </div>
  )
}

export default Message;