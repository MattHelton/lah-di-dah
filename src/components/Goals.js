import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Typography, Paper, TextField, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';


const goalsWidth = '20%'
const styles = {
    root: {
        elevation: '7',
    height: '100%',
    display: 'flex'
    },
    Card: {
        // width: goalsWidth,
        // cellHeight: 'auto',
        // float: 'right',
        borderRadius: 0,
        height: '100%',
    display: 'flex',
        overFlow: 'auto',
    },
    Typography: {
        height: '100%',
    display: 'flex'
    },
    GridList: {
        height: "100%",
    },
    GridListTile: {
        height: 25,
        padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        }
    },
    textField: {
        width: 200,
      },
}

class Goals extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        goal: '',
        
      };
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    render() {
        const { classes} = this.props;
        return (
            <Typography variant='display4'>
                Coming soon!
            </Typography>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Goals);