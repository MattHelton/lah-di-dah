import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
                <div style={{ display: 'inline-flex' }}>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey1.jpeg')}
                        alt='Frey One' 
                        width='40%'
                        height='40%'/>
                    </CardMedia>
                    <Typography variant='h5'>
                        ::thinking about your fusses::
                    </Typography>
                </Card>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey2.jpeg')} 
                        alt='Frey Two'
                        width='40%'
                        height='40%'/>
                    </CardMedia>
                    <Typography variant='h5'>
                        ::looking around for fusses::
                    </Typography>
                </Card>
                <Card>
                    <CardMedia>
                        <img src={require('./Images/Frey3.jpeg')} 
                        alt='Frey Two'
                        width='40%'
                        height='40%'/>
                    </CardMedia>
                    <Typography variant='h5'>
                        ::dreaming about your fusses::
                    </Typography>
                </Card>
                </div>
            </Paper>
            )
    }
}

export default Freyja