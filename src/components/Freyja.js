import React from 'react';
import { Card, Paper, CardMedia, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
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

    componentDidMount = () => {
        const authToken = localStorage.getItem('auth_token')
        if (authToken) {
            fetch("http://localhost:3001/goals", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Authorization: " + authToken
                },


            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        } else {
            this.setState({ loggedIn: false })
        }
    }

    state = {
        goal: '',
        loggedIn: true

    };

    render() {
        const { classes } = this.props;
        if (!this.state.loggedIn) {
            return <Redirect to="/login" />
        }
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
                    {images}
                </Grid>
            </Paper>



        )

    }
}
export default withStyles(styles, { withTheme: true })(Freyja);
// export default Freyja