import React from 'react';

import posts from './Posts.module.css';

import Post from './Post/Post';
import AddPost from './AddPost/AddPost';

const Posts = () => {
  return (
    <div>
      <AddPost />
      <Post msg="hello" title="first" likes="15" />
      <Post msg="hi" title="second" likes="20" />
      <Post msg="how are you?" title="third" likes="18" />
    </div>
  )
}

export default Posts;