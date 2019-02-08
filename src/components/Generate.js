import React from 'react'
import '../App.css';
import Card from '@material-ui/core/Card'
import DirectionsWalkSharp from '@material-ui/icons/DirectionsWalkSharp';
import Book from '@material-ui/icons/Book'
import Choices from './Choices'
import Button from '@material-ui/core/Button'
// import { Button } from 'react-bootstrap';
// import ReactDOM from 'react-dom'

class Generate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            choices: Choices,
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
                    <Button onClick={this.chooseIdea}>Generate</Button>
                    <Card>{this.state.chosenIdea}</Card>

                </div>
            )
    }

}


export default Generate