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

class AddTodo extends React.Component {
  render() {
    return(
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={2} md={1} item>
          <Fab color='primary' aria-label='Add' fullWidth variant='outlined'>
          <AddIcon />
          </Fab>
            
          </Grid>
          <Grid xs={10} md={8} item>
          <TextField placeholder='Add Todo Here' fullWidth style={{paddingLeft: '1em'}}>
              <Select md={10} ></Select>
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddToDo);