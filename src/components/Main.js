import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Freyja from './Freyja';
import Goals from './Goals';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/feels" component={Feels} />
                        <Route path="/freyja" component={Freyja} />
                        <Route path="/goals" component={Goals} />
                    </div>
                </Switch>
            </div>
            )
    }
}

export default Main;