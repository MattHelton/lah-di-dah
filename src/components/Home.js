import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const goalsWidth = '20%'

const styles = {
    root: {
         width: `calc(100% - ${goalsWidth})`,
        float: 'left',
        borderRadius: 0,
    },
    Card: {
        borderRadius: 0,
    },
    Typography: {
        textAlign: 'center',
        padding: 50,
    }
}
class Home extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            
            <div className={classNames(classes.root)}>
                <Card className={classNames(classes.Card)}>
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