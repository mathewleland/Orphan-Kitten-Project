import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './css/main.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import Found from './components/Found';
import About from './components/About';
import Help from './components/Help';

render( (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/found" component={Found}/>
        <Route path="/help" component={Help}/>
      </Route>

    </Router>
), document.getElementById('root'))
