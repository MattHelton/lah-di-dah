import React from 'react';
import {Card, Paper, CardMedia, Typography, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Pics from './Pics'
const goalsWidth = '20%'

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
        return (
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
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey2.jpg')} 
                        alt='Frey Two'
                        width='75%'
                        height='75%'
                        />
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey3.jpg')} 
                        alt='Frey Three'
                        width='75%'
                        height='75%'
                        />
                    </CardMedia>
                </Card >
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey4.jpg')} 
                        alt='Frey Four'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey5.jpg')} 
                        alt='Frey Five'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey6.jpg')} 
                        alt='Frey Six'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey7.jpg')} 
                        alt='Frey Seven'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey8.jpg')} 
                        alt='Frey Eight'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey9.jpg')} 
                        alt='Frey Nine'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey10.jpg')} 
                        alt='Frey Ten'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey11.jpg')} 
                        alt='Frey Eleven'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey12.jpg')} 
                        alt='Frey Twelve'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey13.jpg')} 
                        alt='Frey Thirteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey14.jpg')} 
                        alt='Frey Fourteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey15.jpg')} 
                        alt='Frey Fifteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                </Grid>
        )
            
    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja