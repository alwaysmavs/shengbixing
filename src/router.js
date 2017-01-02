import React, { Component } from 'react'
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom'
import App from './components/homepage'


class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>

                </Route>
            </Router>
        )
    }
}

export default Routers;