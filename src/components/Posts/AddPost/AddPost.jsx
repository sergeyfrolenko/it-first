import React from 'react';

import addpost from './AddPost.module.css';

const Posts = () => {
  return (
    <div className={addpost.wrap}>
      <div className={addpost.title}>My posts</div>
      <div className={addpost.area}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className={addpost.btn}>
        <button>Add post</button>
      </div>
    </div>
  )
}

export default Posts;