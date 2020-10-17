import React from 'react';

import post from './Post.module.css';

const Post = (props) => {
  return (

    <div className={post.post}>
      <div className={post.post__ava}>
        <img src="https://avavatar.ru/images/original/10/2VCBYKFkkb0veayT.jpg" alt="" />
      </div>
      <div className={post.content}>
        <div className={post.title}>{props.title}</div>
        <div className={post.text}>
          <p>{props.msg}</p>
        </div>
        <div className={post.likes}>
          likes {props.likes}
        </div>
      </div>
    </div >
  )
}

export default Post;