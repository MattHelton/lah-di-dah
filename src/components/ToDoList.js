import DeletedOutlined from '@material-ui/icons/DeleteOutlined'
import Paper from '@material-ui/core/Paper';
import React, { memo } from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import { Button, List, TextField } from '@material-ui/core';
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

class TodoList extends React.Component {

  render(){
    return (
      <Paper>
        <List>
            <TextField
              label="Goal"
              margin="dense"
              value={this.props.userInput}
              onChange={this.props.handleUserInput}
              
            />
            <Button 
              color="secondary">
                Add Goal
            </Button>
        </List>
      </Paper>
    )
  }
}

export default TodoList;