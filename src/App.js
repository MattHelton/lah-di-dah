import React, { Component } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer'
import Paper from '@material-ui/core/Paper'
import Main from './components/Main';


 class App extends Component {

  render() {
    return (
      <Paper className='App'>
        <header className="App-header">
          <PersistentDrawerLeft />
        </header>
        <Main />
      </Paper>
    );
  }
}

export default App;