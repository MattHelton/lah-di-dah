import React from 'react';
import {Card, Paper, CardMedia, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Pics from './Pics';

const styles = {
    root: {
        // width: `calc(100% - ${goalsWidth})`,
        // float: 'left',
        height: 500,
        overFlow: 'auto',
    },
    Paper: {
        borderRadius: 0,
        minHeight: '100%'
    },
    Grid: {
        sm: 'auto'
    },
    Card: {
        margin: 20,
        padding: 15,
        borderRadius: 9,
    },
    CardMedia: {
        justifyContent: 'center',
        display: 'flex',
    } 
}



class Freyja extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        goal: '',
        
      };
    
    render(){
        const { classes } = this.props;
        let pictures = Pics.map(image => {
            return (
                        <Card>
                            <CardMedia>
                                <img key={image} 
                                    src={require({image})} 
                                    alt="" 
                                    className="img-responsive" 
                                    width= '75%'
                                    height='75%'/>
                            </CardMedia>
                        </Card>
            )
         });
        return (
        //     <Paper>
        //         {pictures}
        //     </Paper>
        // )
                 <Grid className={classNames(classes.Grid)}>
                     <div style={{ display: 'inline-flex' }}>
                     <Card className={classNames(classes.Card)}>
                         <CardMedia className={classNames(classes.CardMedia)}>
                             <img src={require('./Images/Frey1.jpg')}
                                 alt='Frey One' 
                                 width='75%'
                                 height='75%' 
                             />
                         </CardMedia>
                     </Card>
                 </div>
                 </Grid>
        )
            
    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja