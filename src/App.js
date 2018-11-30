import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
// import CategoryList from './CategoryList'
// import PhotoList from './PhotoList'
// import PhotoDetail from './PhotoDetail'
// import sample from './sample.json'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="App">
            <Link to="/categoryList">Category List </Link>
            <Link to="/photoList"> Photo List </Link>
            <Link to="/photoDetail"> Photo Detail </Link>

            {/* <Route path="/" exact component={home} />
          <Route path="/categoryList/" component={categoryList} />
          <Route path="/photoList/" component={photoList} />
          <Route path="/photoDetail/" component={photoDetail} /> */}
          </div>
        </main>
      </Router>
    )
  }
}

export default App

//To Do list
//
//

//Questions:
//Import json and use it to call images on needed components
//Which component do I call json file?
//Is my category list my home page?
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

//NOTES:
//Min 27 in lecture part 1 from thursday is where we add react-router
