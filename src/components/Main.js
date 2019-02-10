import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Freyja from './Freyja';

class Main extends React.Component {

    render() {
        return (
            <div>
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