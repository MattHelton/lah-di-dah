import React from 'react';
import {Card, Paper, CardMedia, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Pics from './Pics';

const styles = theme => ({
    root: {
        // width: `calc(100% - ${goalsWidth})`,
        // float: 'left',
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