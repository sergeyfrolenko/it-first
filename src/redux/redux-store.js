import { combineReducers, createStore } from 'redux';

import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import asideReducer from './aside-reducer';
import videoReducer from './video-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  asideModule: asideReducer,
  videoPage: videoReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store