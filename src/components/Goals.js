import React, { memo } from 'react';
import { useInputValue, useTodos } from './custom-hooks';
import AddTodo from './AddToDo';
import TodoList from './ToDoList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Select from '@material-ui/core/Select';
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

const Goals = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Paper>
      <Typography style={{textAlign: 'center', fontSize: '4em'}}>
        Your goal list!
      </Typography>
        <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        inItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Paper>
  );
});

export default withStyles(styles, { withTheme: true })(Goals);
