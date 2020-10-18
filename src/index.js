import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
  namesData: [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' }
  ],
  msgsData: [
    { id: 1, msg: 'Hello Bro!' }
  ],
  posts: [
    { id: 1, msg: "hello", title: "first", likes: 15 },
    { id: 1, msg: "hi", title: "second", likes: 20 },
    { id: 1, msg: "how are you?", title: "third", likes: 18 }
  ]
}



ReactDOM.render(
  < React.StrictMode >
    <App data={data} />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
