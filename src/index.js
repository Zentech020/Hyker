import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/example' component={Example} />
        </Switch>
    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
