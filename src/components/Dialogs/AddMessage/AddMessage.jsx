import React from 'react';

import s from './AddMessage.module.css';

const Message = (props) => {

  const addMsg = () => {
    props.addMsg()
  }
  const handleMsg = (event) => {
    props.handleMsg(event.target.value)
  }


  return (
    <div className={s.wrap}>
      <div className={s.title}>New message</div>
      <div className={s.area}>
        <textarea cols="30" rows="10" onChange={handleMsg} value={props.addMsgValue}></textarea>
      </div>
      <div className={s.btn}>
        <button onClick={addMsg}>Add message</button>
      </div>
    </div>
  )
}

export default Message;