import AddIcon from '@material-ui/icons/Add';
import React, { memo } from 'react';
import classNames from 'classnames';
import { Paper, Grid, TextField, Fab, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    Select: {
      justifyContent: 'right'
    }
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
            <Grid xs={10} md={8} item >
                <TextField
                    placeholder="Add Todo Here"
                    value={props.inputValue}
                    onChange={props.onInputChange}
                    onKeyPress={props.onInputKeyPress}
                    fullWidth
                    style={{paddingLeft: '1em'}}
                    />
                    <Select md={10} >
        </Select>
            </Grid>
        </Grid>
    </Paper>
));

export default withStyles(styles, { withTheme: true })(AddToDo);