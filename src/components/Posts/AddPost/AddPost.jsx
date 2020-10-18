import React from 'react';

import addpost from './AddPost.module.css';

let newPost = React.createRef()

const Posts = (props) => {
  const addPost = () => {
    console.log(newPost.current.value)
    props.addPost(newPost.current.value)
  }
  return (
    <div className={addpost.wrap}>
      <div className={addpost.title}>My posts</div>
      <div className={addpost.area}>
        <textarea ref={newPost} cols="30" rows="10"></textarea>
      </div>
      <div className={addpost.btn}>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  )
}

export default Posts;