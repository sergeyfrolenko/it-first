import React from 'react';

import s from './Dialogs.module.css';

import Name from './Name/Name';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        <h3>Dialogs</h3>
        <Name />
      </div>
      <div className={s.messages}>
        <Message />
      </div>
    </div>
  )
}

export default Dialogs;