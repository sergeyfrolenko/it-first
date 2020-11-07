import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/redux-store'

// export let rerenderEntireTree = () => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// }
// rerenderEntireTree()
// store.subscribe(rerenderEntireTree)


