import DeletedOutlined from '@material-ui/icons/DeleteOutlined';
import React from 'react';
import { Paper, List, ListItem, IconButton, ListItemText, ListItemSecondaryAction, Checkbox } from '@material-ui/core';
class ToDoListItem extends React.Component {


    render(){
      const { classes } = this.props;
      return (
        <ListItem>
          <Checkbox />
          <ListItemText />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo">
              <DeletedOutlined />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    }
  }

  export default ToDoListItem;