import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import VideoContainer from './components/Video/VideoContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (

    <div className="App">
      <Header />
      <Aside state={props.state.asideModule} />
      <div className="content-wrapper">
        <Route exact path="/" render={(p) => (<Profile state={props.state.profilePage} dispatch={props.dispatch} />)} />
        <Route path="/profile" render={(p) => (<Profile state={props.state.profilePage} dispatch={props.dispatch} />)} />
        <Route path="/dialogs" render={(p) => (<DialogsContainer />)} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/video" render={(p) => (<VideoContainer />)} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/settings" component={Settings} />
      </div>
      <Footer />
    </div>

  );
}

export default App;
