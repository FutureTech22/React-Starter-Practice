// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// Import custom components
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import Main from './common/main.component.jsx'

render(
    <Router>
    	<Route  path="/" component={Main} path="app" history={browserHistory}>
 			<IndexRoute component={Home} />
        	<Route path="/cars" component={Car}/>
        	<Route path="/about" component={About}/>
        	<Link to="/">Home</Link>
        </Route>	
    </Router>,
    document.getElementById('container')
);