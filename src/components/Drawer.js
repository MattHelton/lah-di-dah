import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import BuildSharp from '@material-ui/icons/BuildSharp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteSharp from '@material-ui/icons/FavoriteSharp';
import HomeSharp from '@material-ui/icons/HomeSharp';
import MenuIcon from '@material-ui/icons/Menu';
import PetsSharp from '@material-ui/icons/PetsSharp';
import { red } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const drawerWidth = 175;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor: red,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  Typography: {
  },
  menuButton: {
    marginLeft: 12,
    // marginRight: 12,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
},
contentShift: {
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
},
});

class PersistentDrawerLeft extends React.Component {
state = {
  open: false,
  selectedIndex: 1,
};

handleDrawerOpen = () => {
  this.setState({ open: true });
};

handleDrawerClose = () => {
  this.setState({ open: false });
};
render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classNames(classes.Typography)} variant="h6" color="inherit" >
              rwy'n dy garu di
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem 
            button component={Link} to='/' key='Home'
            selected={this.state.selectedIndex === 0}>
              <ListItemIcon>
                <HomeSharp />  
              </ListItemIcon> 
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to='/feels' key='Feels'>
              <ListItemIcon>
                <FavoriteSharp />  
              </ListItemIcon> 
              <ListItemText primary='Feel Okay' />
            </ListItem>
            <ListItem button component={Link} to='/freyja' key='Freyja'>
              <ListItemIcon>
                <PetsSharp />  
              </ListItemIcon> 
              <ListItemText primary='Freyja' />
            </ListItem>
            <ListItem button component={Link} to='/goals' key='Goals'>
              <ListItemIcon>
                <BuildSharp />  
              </ListItemIcon> 
              <ListItemText primary='Goals' />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);