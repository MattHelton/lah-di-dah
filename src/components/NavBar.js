import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
            <AppBar position='fixed' color='inherit'>
                <ToolBar>
                    <Typography variant='title' color='inherit'>
                        Secrets
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;