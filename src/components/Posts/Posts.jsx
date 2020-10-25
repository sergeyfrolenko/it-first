import React from 'react';

import posts from './Posts.module.css';

import Post from './Post/Post';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {

  const getPosts = () => {
    return (
      props.state.posts.map((el, key) => {
        return <Post key={key} msg={el.msg} title={el.title} likes={el.likes} />
      })
    )
  }

  return (
    <div>
      <AddPost addPost={props.addPost} updateAddPostValue={props.updateAddPostValue} />
      {getPosts()}
    </div>
  )
}

export default Posts;