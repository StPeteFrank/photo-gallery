import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Photo Gallery</h1>
          </header>
        </div>
      </Router>
    )
  }
}

export default App

//To Do list

//

//HOMEWORK INSTRUCTIONS

//You should have at least 4 components: App, CategoryList, PhotoList, PhotoDetail.
//On the home page, your category list should render the title of each category and link using the key. For examples "Panda Bears" should link to /pandas
//Render each photo in the given category on the photo list page with a thumbnail sized version of your photos.
//Render a large version of the photo on the photo details page.

//Adding dependencies to your React Project
//Navigating JSON data structures
//Using the React Router library
//Using parameters in React Router
