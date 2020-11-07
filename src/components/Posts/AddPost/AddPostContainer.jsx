import React from 'react';
import { connect } from 'react-redux';

import { addPostActionCreator, updateNewPostValueActionCreator } from '../../../redux/profile-reducer';

import AddPost from './AddPost';

let mapStateToProps = (state) => {
  return {}
}
let mapDispatchToProps = (dispatch) => {
  return (
    {
      addPost: () => dispatch(addPostActionCreator()),
      updateNewPostValue: () => dispatch(updateNewPostValueActionCreator())
    }
  )
}

const addPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default addPostContainer

// const Posts = (props) => {

//   const addPost = () => {
//     props.dispatch(addPostActionCreator())
//   }
//   const handlerAddPostValue = (event) => {
//     props.dispatch(updateNewPostValueActionCreator(event.target.value))
//   }
//   return (
//     <div className={addpost.wrap}>
//       <div className={addpost.title}>My posts</div>
//       <div className={addpost.area}>
//         <textarea value={props.state.addPostValue} onChange={handlerAddPostValue} cols="30" rows="10" />
//       </div>
//       <div className={addpost.btn}>
//         <button onClick={addPost}>Add post</button>
//       </div>
//     </div>
//   )
// }

// export default Posts;