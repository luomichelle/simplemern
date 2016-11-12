import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from "./containers/Home";
import Giphy from "./containers/Giphy"

import './assets/App.css';

class App extends Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Home} />
                <Route path='/giphy' component={Giphy} />
            </Router>
        )
    }
}

export default App;
