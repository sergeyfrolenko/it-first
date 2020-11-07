import React from 'react';
import { connect } from 'react-redux'

import { handleTitleAction } from '../../redux/video-reducer';

import Video from './Video';

let mapStateToProps = (state) => {
  return {
    title: state.videoPage.title
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleTitle: (txt) => {
      dispatch(handleTitleAction(txt))
    }
  }
}

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video)

export default VideoContainer;