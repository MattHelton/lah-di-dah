import React from 'react'

class GoalShow extends React.Component {
    state = { goal: {} }
    componentDidMount = () => {
        fetch("http://localhost:3000/goals/5").then(res => res.json()).then(goal => this.setState({ goal }))
    }
    render() {
        return (
            <div>
                <h3>{this.state.goal.name}</h3>
                <p>{this.state.goal.priority}</p>
            </div>
        )
    }

}

export default GoalShow