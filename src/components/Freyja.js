import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const goalsWidth = 175

const styles = {
    root: {
        width: `calc(100% - ${goalsWidth}px)`,
        float: 'left'
    },
    Card: {
        borderRadius: 0,
        // marginTop: 10,
        // marginRight: 10,
        // marginLeft: 10,
        // marginBottom: 10, 
        // paddingTop: 25,
        // paddingBottom: 25,
    }  
}


class Freyja extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        const { classes } = this.props;
        return (
            
                <div className={classNames(classes.root)}>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey1.jpeg')}
                        alt='Frey One' 
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia className={classNames(classes.CardMedia)}>
                        <img src={require('./Images/Frey2.jpeg')} 
                        alt='Frey Two'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey3.jpeg')} 
                        alt='Frey Three'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card >
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey4.jpg')} 
                        alt='Frey Four'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey5.JPG')} 
                        alt='Frey Five'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey6.jpg')} 
                        alt='Frey Six'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey7.jpg')} 
                        alt='Frey Seven'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey8.jpg')} 
                        alt='Frey Eight'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey9.JPG')} 
                        alt='Frey Nine'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey10.jpg')} 
                        alt='Frey Ten'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey11.jpg')} 
                        alt='Frey Eleven'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey12.jpg')} 
                        alt='Frey Twelve'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                <div style={{ display: 'inline-flex' }}>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey13.jpg')} 
                        alt='Frey Thirteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey14.jpg')} 
                        alt='Frey Fourteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                <Card className={classNames(classes.Card)}>
                    <CardMedia>
                        <img src={require('./Images/Frey15.jpg')} 
                        alt='Frey Fifteen'
                        width='75%'
                        height='75%'/>
                    </CardMedia>
                </Card>
                </div>
                </div>
            
            )
    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja