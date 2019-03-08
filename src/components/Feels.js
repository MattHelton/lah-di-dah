import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core/';
import Choices from './Choices'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        // display: 'block',
        // // width: `calc(100% - ${goalsWidth})`,
        // // float: 'left',
        // borderRadius: 0,
        // justifyContent: 'center',
        // margin: 'auto'
        height: '100%'
    },
    Paper: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.common.black,
        height: '100%',
        borderRadius: 0,
        margin: 'auto',
    },
    Typography: {
        // align: 'justify',
        color: 'textSecondary',
        padding: 25,
        textAlign: 'center',
        margin: 'auto',
    },
    Button: {
        margin: 'auto',
        // width: '50%',
        display: 'flex',
        justifyContent: 'center',
    }
})

class Feels extends React.Component {
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
        const { classes } = this.props;
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
                            variant='h4' 
                            component='h2'>
                                {this.state.chosenIdea}
                        </Typography>
                        </div>
                </Paper>
            )
    }

}

export default withStyles(styles, { withTheme: true })(Feels);
// export default Generate