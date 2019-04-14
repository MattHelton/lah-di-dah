import React, { memo, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { List, Paper } from '@material-ui/core';
import TodoListItem from './ToDoListItem';
import { withStyles } from '@material-ui/core/styles';
import GoalShow from "./GoalShow"


const TodoList = memo(props => {
    const [goals, setGoals] = useState([]);

    useEffect(async () => {
        const goals = await fetch("http://localhost:3000/goals")
            .then(res => res.json())

        setGoals(goals);
    }, []);

    return (
        <Paper style={{ margin: 16, textAlign: 'center' }}>
            <List style={{ overflow: 'scroll' }}>
                {goals.map((todo, idx) => (
                    <TodoListItem
                        {...todo}
                        key={`TodoItem.${idx}`}
                        divider={idx !== goals.length - 1}
                        onButtonClick={() => props.onItemRemove(idx)}
                        onCheckBoxToggle={() => props.onItemCheck(idx)}
                    />
                ))}
            </List>
            <Switch>
                <Route path="/todos/:id" component={GoalShow} />
             
            </Switch>
        </Paper>
    )
})

// class TodoList extends React.Component {

//     state = { goals: [] }

//     componentDidMount = () => {
//         fetch("http://localhost:3000/goals").then(res => res.json()).then(goals => {
//             this.setState({ goals })
//         })
//     }
//     render() {
//         if (this.state.goals.length > 0) {
//             return (

//                 < Paper style={{ margin: 16, textAlign: 'center' }
//                 }>

//                     <List style={{ overflow: 'scroll' }}>
//                         {this.state.goals.map((todo, idx) => (
//                             <TodoListItem
//                                 {...todo}
//                                 key={`TodoItem.${idx}`}
//                                 divider={idx !== this.state.goals.length - 1}
//                                 onButtonClick={() => this.state.onItemRemove(idx)}
//                                 onCheckBoxToggle={() => this.state.onItemCheck(idx)}
//                             />
//                         ))}
//                     </List>
//                 </Paper >)
//         } else {
//             return (<div>Nothing</div>)
//         }
//     }


// }



export default TodoList;