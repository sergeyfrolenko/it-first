import React from 'react';

import addpost from './AddPost.module.css';

let newPost = React.createRef()

const Posts = (props) => {
  const addPost = () => {
    props.addPost(newPost.current.value)
    newPost.current.value = ''
  }
  const handlerAddPostValue = (e) => {
    props.updateAddPostValue(e.target.value)
  }
  return (
    <div className={addpost.wrap}>
      <div className={addpost.title}>My posts</div>
      <div className={addpost.area}>
        <textarea ref={newPost} value={props.addPostValue} onChange={handlerAddPostValue} cols="30" rows="10" />
      </div>
      <div className={addpost.btn}>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  )
}

export default Posts;