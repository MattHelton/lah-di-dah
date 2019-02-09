import React from 'react'
import '../App.css';
import Card from '@material-ui/core/Card'
import Choices from './Choices'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    Typography: {
        align: 'justify',
        color: 'secondary',
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 100,
        paddingRight: 100,
    },
    CardMedia: {
        
    }
})

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
        const { classes, theme } = this.props;
            return (
                <div>
                    <Button variant='contained' color='secondary' onClick={this.chooseIdea}>Generate Happy Activity</Button>
                    <Card>
                        <Typography className={classNames(classes.Typography)} color='textSecondary' variant='h3' component='h2'>{this.state.chosenIdea}</Typography>
                    </Card>

                </div>
            )
    }

}

export default withStyles(styles, { withTheme: true })(Generate);
// export default Generate