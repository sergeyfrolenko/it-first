import React from 'react';

import './App.css';

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Profile />
      <Footer />
      <Header />
    </div>
  );
}

export default App;
