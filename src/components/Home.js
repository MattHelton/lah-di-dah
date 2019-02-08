import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

class Home extends React.Component {

    render(){
        return (
            <Paper>
                <Card>
                    <Typography variant='h2'>
                        Welcome to your app, little one!
                    </Typography>
                    <Typography variant='h3' color='textSecondary'>
                        Here's your reward for being so good!!!
                    </Typography>
                </Card>
            </Paper>
        )
    }
}

export default Home;