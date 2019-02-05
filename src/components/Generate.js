import React from 'react'
import '../App.css';
// import { Button } from 'react-bootstrap';
// import ReactDOM from 'react-dom'

class Generate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: ['Go for a walk', 'Read some poetry', 'Read a comic', 'Read a short story', 'Swim/dabble them trotters in some water', 'Listen to some music', 'Take a shower', 'Take a nice pamper shower', 'Cut hair', 'Organize something', 'Make soup/meal prep', 'Draw or paint', 'Write a letter', 'Call someone you love', 'Get some sun', 'Look at art', 'Meditate'],
            chosenIdea: ''

        }
    }
    randomizer() {
        return Math.floor((Math.random() * 17))
    }
    chooseIdea = () => {
        const chosenIdea = this.state.choices[this.randomizer()]
        this.setState({ chosenIdea })

        
    }
    render() {
            return (
                <div>
                    <button type='button' className='btn-lrg' id='gen-btn' onClick={this.chooseIdea}>Generate</button>
                    <p id='idea'>{this.state.chosenIdea}</p>
                </div>
            )
    }

}


export default Generate