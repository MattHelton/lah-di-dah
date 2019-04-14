import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

const ToDoListItem = memo(props => (
    <ListItem divider={props.divider}>
        {/* <Checkbox
            onClick={props.onCheckBoxToggle}
            checked={props.checked}
            disableRipple
        /> */}
        <ListItemText primary={props.name} />
        <ListItemText secondary={props.priority} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
                <DeleteOutlined />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
));


export default ToDoListItem;