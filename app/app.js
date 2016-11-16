// Include the Main React Dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

//Import the componemnts
import Main from './Components/Main'
import Search from './Components/Search'
import Saved from './Components/Saved'

//Reactu router in action
render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Search} />
            <Route path="search" component={Search} />
            <Route path="saved" component={Saved} />
        </Route>
    </Router>

),     document.getElementById('app'))