import React from 'react';
import { connect } from 'react-redux'

import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    msgsData: [...state.dialogsPage.msgsData],
    namesData: [...state.dialogsPage.namesData]
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;