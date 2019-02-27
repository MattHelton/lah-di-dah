import React from 'react';
import {Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
    root: {
        //  width: `calc(100% - ${goalsWidth})`,
        // float: 'left',
        borderRadius: 0,
    },
    Card: {
        borderRadius: 0,
        height: 500,
        overFlow: 'auto',
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