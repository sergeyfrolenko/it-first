import React from 'react';
import { connect } from 'react-redux'

import { addMsgActionCreator, updateNewMsgValueActionCreator } from '../../../redux/dialog-reducer';

import AddMessage from './AddMessage';

let mapStateToProps = (state) => {
  return {
    addMsgValue: state.dialogsPage.addMsgValue
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMsg: () => {
      dispatch(addMsgActionCreator())
    },
    handleMsg: (txt) => {
      dispatch(updateNewMsgValueActionCreator(txt))
    }
  }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer;