import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Card, Typography } from '@material-ui/core';

const goalsWidth = '200px'

const styles = {
    root: {
        display: 'flex',
        float: 'left',
        width: `calc(100% - ${goalsWidth})`,
        height: '100vh'
    },
    Card: {
        borderRadius: 0,
        width: '100%'
    },
    Typography: {
        textAlign: 'center',
        // padding: 50,
    }
}
class Home extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            
            <div className={classNames(classes.root)}>
                <Card className={classNames(classes.Card)}>
                    <Typography className={classNames(classes.Typography)} variant='display4' nowrap gutterBottom>
                        Helo, un bach!
                    </Typography>
                    <Typography className={classNames(classes.Typography)} variant='display1' color='textSecondary' nowrap>
                        eich bod mor dda
                    </Typography>
                </Card>
                </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);