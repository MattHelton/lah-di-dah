import React, { memo } from 'react';
import AddTodo from './AddToDo';
import TodoList from './ToDoList';
import Paper from '@material-ui/core/Paper';
import {List} from '@material-ui/core';
import { ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeletedOutlined from '@material-ui/icons/DeleteOutlined'
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
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
      <List>
        <Paper>
          <List>
            <ListItem>
              <ListItemText>
                <ListItemSecondaryAction>
                  <IconButton>
                    <DeletedOutlined></DeletedOutlined>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
      </List>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Goals);
