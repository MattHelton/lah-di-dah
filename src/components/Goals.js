import AddTodo from './AddToDo';
import DeletedOutlined from '@material-ui/icons/DeleteOutlined'
import Paper from '@material-ui/core/Paper';
import React, { memo } from 'react';
import Select from '@material-ui/core/Select';
import TodoList from './ToDoList';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import { List, ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const goalsWidth = '200px'

const styles = theme => ({
  root: {
    display: 'flex',
        float: 'left',
        justifyContent: 'center',
        width: `calc(100% - ${goalsWidth})`,
        height: '100vh',
  }
})

class Goals extends React.Component {


  render(){
    const { classes } = this.props;
    return (
      <Paper className={classNames(classes.root)}>
        <Typography>
          A list containing todo items.
        </Typography>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Goals);
