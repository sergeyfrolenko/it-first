import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import state from './redux/state'
import { subscribe } from './redux/state'

import { addPost } from './redux/state'
import { addMsg } from './redux/state'
import { updateAddPostValue } from './redux/state'


export let rerenderEntireTree = () => {
  ReactDOM.render(
    < React.StrictMode >
      <App state={state} addPost={addPost} addMsg={addMsg} updateAddPostValue={updateAddPostValue} />
    </React.StrictMode >,
    document.getElementById('root')
  );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)



// ReactDOM.render(
//   < React.StrictMode >
//     <App state={state} addPost={addPost} />
//   </React.StrictMode >,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
