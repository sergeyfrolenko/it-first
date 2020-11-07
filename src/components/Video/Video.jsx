import React from 'react';

import s from './Video.module.css';

const Video = (props) => {
  const handleTitle = (event) => {
    props.handleTitle(event.target.value)
  }

  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <input type="text" value={props.title} onChange={handleTitle} />
    </div>
  )
}

export default Video