import React from 'react'
import '../App.css';
import Card from '@material-ui/core/Card'
import Choices from './Choices'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';

const goalsWidth = '20%'

const styles = theme => ({
    root: {
        display: 'block',
        width: `calc(100% - ${goalsWidth})`,
        float: 'left',
        borderRadius: 0,
        justifyContent: 'center',
        margin: 'auto',
    },
    Paper: {
        display: 'flex',
        justifyContent: 'center'
    },
    Typography: {
        // align: 'justify',
        // color: 'secondary',
        // paddingTop: 100,
        // paddingBottom: 100,
        // paddingLeft: 100,
        // paddingRight: 100,
        textAlign: 'center',
        margin: 'auto',
        width: '50%'
    },
    Button: {
        // margin: 'auto',
        // width: '50%',
        display: 'flex',
        justifyContent: 'center'
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
                <Paper className={classNames(classes.root)}> 
                <div margin='auto' width='50%'>
                        <Button 
                            className={classNames(classes.Button)} 
                            color='secondary' 
                            variant='contained' 
                            onClick={this.chooseIdea}>
                                 Happy Activity
                        </Button>
                        <Typography 
                            className={classNames(classes.Typography)} 
                            variant='h3' 
                            component='h2'>
                                {this.state.chosenIdea}
                        </Typography>
                        </div>
                </Paper>
            )
    }

}

export default withStyles(styles, { withTheme: true })(Generate);
// export default Generate