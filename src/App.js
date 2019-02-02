import React, { Component } from 'react';
import './App.css';
import Heart from './components/Heart.js';
// import NavBar from './components/NavBar';
// import Song from './components/Song';
import PersistentDrawerLeft from './components/Drawer'



class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Song /> */}
      {/* <NavBar /> */}
      <PersistentDrawerLeft />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;