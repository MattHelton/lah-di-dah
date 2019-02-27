import React, { memo } from 'react';
import { Paper, Grid, TextField, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const AddToDo = memo(props => (
    <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
        <Grid xs={2} md={1} item>
        <Fab color="primary" aria-label="Add" fullWidth
            variant='outlined'
            onClick={props.onButtonClick}><AddIcon />
        </Fab>
                      
            </Grid>
            <Grid xs={10} md={11} item >
                <TextField
                    placeholder="Add Todo Here"
                    value={props.inputValue}
                    onChange={props.onInputChange}
                    onKeyPress={props.onInputKeyPress}
                    fullWidth
                    style={{paddingLeft: '1em'}}
                    />
            </Grid>
        </Grid>
    </Paper>
));

export default withStyles(styles, { withTheme: true })(AddToDo);