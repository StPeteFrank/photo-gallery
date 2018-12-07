import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import CategoryList from './CategoryList'

import PhotoList from './PhotoList'

import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/:category" component={PhotoList} />
          <Route path="/:category/:index" component={PhotoDetail} />
        </div>
      </Router>
    )
  }
}

export default App
