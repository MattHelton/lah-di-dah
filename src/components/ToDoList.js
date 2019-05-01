import React from 'react';
import TodoListItem from './ToDoListItem';
import { List, Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class TodoList extends React.Component {
    render() {
        return (
            <Paper style={{ margin: 16, textAlign: 'center '}}>
                <List style={{ overflow: 'scroll '}}>
                    <TodoListItem
                        {/* 
                            Map over TodoListItems in db
                        */}
                    />
                </List>
            </Paper>
        )
    }
}
export default TodoList;