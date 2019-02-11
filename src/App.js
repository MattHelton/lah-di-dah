import React, { Component } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer';
import Paper from '@material-ui/core/Paper';
import Main from './components/Main';
import Goals from './components/Goals';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const goalsWidth = 175
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
  constructor(props) {
    super(props)

  }

  render() {
    const { classes } = this.props;
      return (
        <Paper className={classNames(classes.Paper)}>
          <header >
            <PersistentDrawerLeft />
          </header>
          <Main />
          <Goals className={classNames(classes.Goals)}/>
        </Paper>
      );
    }
}

export default withStyles(styles, { withTheme: true })(App);