import React from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';

class Layout extends React.Component {
    render() {
        return (
            <Paper>
                <AppBar>
                    <Toolbar>
                        <Typography></Typography>
                    </Toolbar>
                </AppBar>
            </Paper>
        )
    }
}

export default Layout;