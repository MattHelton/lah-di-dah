import React, { memo } from 'react';
import DeletedOutlined from '@material-ui/icons/DeleteOutlined';
import { Paper, List, ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

class ToDoListItem extends React.Component {


    render(){
      const { classes } = this.props;
      return (
        <List>
          <Paper>
            <List>
              <ListItem>
                <ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo">
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

  export default ToDoListItem;