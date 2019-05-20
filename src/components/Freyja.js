// This component is eventually to be a page that you can upload and show pictures that make you happy.

import React from 'react';
import {Card, Paper, CardMedia, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Pics from './Pics';

const goalsWidth = '200px'

const styles = theme => ({
    root: {
        display: 'flex',
        float: 'left',
        justifyContent: 'center',
        width: `calc(100% - ${goalsWidth})`,
        height: '100vh',
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
      },
    Grid: {
        // sm: 'auto'
    },
    Card: {
        margin: 20,
        border: 'auto',
        padding: 'auto',
        width: '50%',
    },
    CardMedia: {
        justifyContent: 'center',
        display: 'flex',
    } 
})



class Freyja extends React.Component {
    
    state = {
        goal: '',
        
      };
    
    render(){
        const { classes } = this.props;
        let images = Pics.map((image, index) => {
            return (
                    <Card id={index + 1} className={classNames(classes.Card)} item xs={12}>  
                        <CardMedia className={classNames(classes.CardMedia)}>
                            <img key={image} src={require(`${image}`)} alt="" className="img-responsive" height='35%' width='35%' />
                        </CardMedia>
                    </Card>
                    )
        })
        return (
            <Paper className={classes.root}>
                <Grid container spacing={24} className={classNames(classes.Grid)}>
                        { images }
                </Grid>
            </Paper>
                       
                    
         
        )
            
    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja