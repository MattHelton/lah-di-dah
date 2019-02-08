import React from 'react';
import Paper from '@material-ui/core/Paper';
import Routes from './Router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Freyja from './Freyja';

class Main extends React.Component {

    render() {
        return (
            <div>
        <Paper>
            This is the sheet of paper.
            </Paper>
            <Switch>
            <div>
              <Route exact path="/" component={Home} />
                  <Route path="/Feels" component={Feels} />
                  <Route path="/Freyja" component={Freyja} />
                  </div>
            </Switch>
            </div>
            )
    }
}

export default Main;