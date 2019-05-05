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
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render(){
    return (
      <Paper>
        <List>
            <TextField
              id="standard-dense"
              label="Goal"
              margin="dense"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
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