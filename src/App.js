import React, { Component } from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer';
import Paper from '@material-ui/core/Paper';
import Main from './components/Main';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import GoalsBar from './components/GoalsBar';
import theme from './theme';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";


const goalsWidth = '20%'
const styles = {
  root: {
    // display: 'flex',
    // width: `calc(100% - ${goalsWidth})`,
    // cellHeight: 'auto', 
    // float: 'left',
    // margin: 0,
  },
  Paper: {
    // width: '100%',
    // borderRadius: 0,
    // width: `calc(100% - ${goalsWidth})`,
  },
  Goals: {

  }
}

class App extends Component {



  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <header >
          <PersistentDrawerLeft />
        </header>
        <Main />
        <GoalsBar />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);