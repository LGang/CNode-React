import './App.css'

import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Index from './pages/Index'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 路由配置 */}
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    )
  }
}
