import React, { Component } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Feels from './components/Feels';
import Freyja from './components/Freyja';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <PersistentDrawerLeft />
        <Main />
        </header>
      </div>
    );
  }
}

export default App;