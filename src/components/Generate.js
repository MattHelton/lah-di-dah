import React from 'react'
import '../App.css';
// import { Button } from 'react-bootstrap';
// import ReactDOM from 'react-dom'

class Generate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: [],
            chosenIdea: ''

        }
    }
    randomizer() {
        return Math.floor((Math.random() * 20))
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