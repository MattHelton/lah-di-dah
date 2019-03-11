import React from 'react';
import {Paper, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        float: 'right',
        width: '200px',
        margin: '0',
        borderRadius: 0,
        
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        float: 'right',
        width: '200px',
        margin: '0',
        borderRadius: 0,
        height: '100vh'
      },
    Grid: {
        // sm: 'auto'
    },
    Card: {
        margin: 20,
        border: 'auto',
        padding: 'auto',
        // width: '50%',
    },
    CardMedia: {
        justifyContent: 'center',
        display: 'flex',
    } 
})

class GoalsBar extends React.Component {

render(){
    const { classes } = this.props;
    return (
        <Paper className={classNames(classes.paper)}>
            <Card className={classNames(classes.Card)}>This is a goal</Card>
            <Card className={classNames(classes.Card)}>This is a goal</Card>
        </Paper>
    )

}

}

export default withStyles(styles, { withTheme: true })(GoalsBar);