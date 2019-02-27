import React, { Component } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer';
import Paper from '@material-ui/core/Paper';
import Main from './components/Main';
import classNames from 'classnames';
import { green } from '@material-ui/core/colors';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: green,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

const styles = {
  root: {
    // display: 'flex',
    // width: `calc(100% - ${goalsWidth}px)`,
    // cellHeight: 'auto',
    display: 'block'
  },
  Paper: {
    width: '100%',
    borderRadius: 0,
    height: '100%'
  },
  Goals: {
    
  }
}

 class App extends Component {

  render() {
    const { classes } = this.props;
      return (
        <Paper className={classNames(classes.Paper)}>
          <header >
            <PersistentDrawerLeft />
          </header>
          <Main />
        </Paper>
      );
    }
}

export default withStyles(styles, { withTheme: true })(App);