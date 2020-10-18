import React from 'react';

import s from './Dialogs.module.css';

import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = (props) => {
  let getMsgs = () => {
    return (
      props.state.msgsData.map((el, key) => {
        return <Message key={key} msg={el.msg} />
      })
    )
  }

  let getNames = () => {
    return (
      props.state.namesData.map((el, key) => {
        return <Name key={key} name={el.name} link={el.id} />
      })
    )
  }

  return (

    <div className={s.dialogs}>
      <div className={s.names}>
        <h3>Dialogs</h3>
        {getNames()}
      </div>
      <div className={s.messages}>
        {getMsgs()}
      </div>
    </div>
  )
}

export default Dialogs;