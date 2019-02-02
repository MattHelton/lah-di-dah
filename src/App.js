import React, { Component } from 'react';
import './App.css';
import Heart from './components/Heart.js'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav id='navBar'><NavBar /></nav>
        <header className="App-header">
          <h1 className="message">rwy'n dy garu di</h1>
          <p>
            <Heart />
          </p>
          <h1 className='message'>un bach</h1>
        </header>
      </div>
    );
  }
}

export default App;