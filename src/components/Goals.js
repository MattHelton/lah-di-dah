import React from 'react';
import GridList from '@material-ui/core/GridList';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import { green } from '@material-ui/core/colors';


const goalsWidth = 175
const styles = {
    root: {
       background: green,
    height: '100%'
    },
    Card: {
        width: goalsWidth,
        // cellHeight: 'auto',
        float: 'right',
        borderRadius: 0,
        height: '100%',
        background: green,
    },
    GridList: {
        height: "100%",
        background: green,
    },
    GridListTile: {
        height: 25,
        padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            background: green,
        }
    }
}

class Goals extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const { classes } = this.props;
        return (
            <Card className={classNames(classes.Card)}>
                <GridList className={classNames(classes.GridList)}>
                    <GridListTile classNAme={classNames(classes.GridListTile)}>
                        <Typography>
                            Here is my GridList.
                        </Typography>
                        <Typography>
                            Another thing.
                        </Typography>
                    </GridListTile>
                </GridList>
            </Card>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Goals);