import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

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
        return (
            <Paper>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey1.jpeg')}
                        alt='Frey One' 
                        width='25%'
                        height='25%'/>
                    </CardMedia>
                </Card>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey2.jpeg')} 
                        alt='Frey Two'
                        width='25%'
                        height='25%'/>
                    </CardMedia>
                </Card>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey3.jpeg')} 
                        alt='Frey Two'
                        width='25%'
                        height='25%'/>
                    </CardMedia>
                </Card>
            </Paper>
            )
    }
}

export default Freyja