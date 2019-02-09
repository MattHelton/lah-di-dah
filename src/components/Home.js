import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { withStyles} from '@material-ui/core/styles'
import classNames from 'classnames';

const styles = {
    Card: {
        height: 600
    },
    Typography: {
        padding: 50,
    }
}
class Home extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <Paper>
                <Card className={classNames(classes.Card)}>
                    <Typography className={classNames(classes.Typography)} variant='h2' nowrap>
                        Welcome to your app, little one!
                    </Typography>
                    <Typography className={classNames(classes.Typography)} variant='h3' color='textSecondary' nowrap>
                        Here's your reward for being so good!!!
                    </Typography>
                </Card>
            </Paper>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);