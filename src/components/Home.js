import React from 'react';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { withStyles} from '@material-ui/core/styles'
import classNames from 'classnames';

const goalsWidth = 175

const styles = {
    root: {
        height: 'auto',
        width: '75%,',
        float: 'left'
    },
    Paper: {
        // width: `calc(100% - ${goalsWidth}px)`,
        // marginRight: goalsWidth,
        marginRight: goalsWidth,
        height: 'auto'
    },
    Card: {
       width: '100%', 
    },
    Typography: {
        padding: 50,
    }
}
class Home extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            
            <div className={classNames(classes.root)}>
                <Card>
                    <Typography className={classNames(classes.Typography)} variant='h2' nowrap>
                        Helo, un bach!
                       
                    </Typography>
                    <Typography className={classNames(classes.Typography)} variant='h3' color='textSecondary' nowrap>
                        eich bod mor dda
                    </Typography>
                </Card>
                </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Home);