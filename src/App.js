import './App.css'
import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Index from './pages/Index'
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import Topic from './pages/Topic';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/topic/:id" component={Topic} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}
