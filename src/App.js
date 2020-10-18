import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside state={props.state.asideModule} />
        <div className="content-wrapper">
          <Route exact path="/" render={(p) => (<Profile state={props.state.profilePage} />)} />
          <Route path="/profile" render={(p) => (<Profile state={props.state.profilePage} />)} />
          <Route path="/dialogs" render={(p) => (<Dialogs state={props.state.dialogsPage} />)} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
