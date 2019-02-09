import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    Card: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20, 
        paddingTop: 25,
        paddingBottom: 25,
        background: '#f50057'
    },
    CardMedia: {
        
    }
})

class Freyja extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            freyPics: [
                {pic: './Images/Frey1.jpeg'}, 
                {pic: './Images/Frey2.jpeg'}, 
                {pic: './Images/Frey3.jpeg'}
            ],
            chosenPic: ''

        }
        this.choosePic = this.choosePic.bind(this)
    }

    

    randomizer() {
        return Math.floor((Math.random() * 3))
    }
    choosePic() {
        const chosenPic = this.state.freyPics.pic[this.randomizer()]
        return this.setState({ chosenPic })
    }
    render(){
        const { classes, theme } = this.props;
        return (
            <Paper>
                <div>
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
                </div>
            </Paper>
            )
    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja