import React, { Component } from 'react'
import CategoryList from './CategoryList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <CategoryList />
      </div>
    )
  }
}

export default App

//To Do list
//Need a category list page(home page) that has two categories pandas and miniature painting on it
//Click either category to be taken to photolist page
//On photolist page click on a thumbnail photo to be taken to photo detail page
//On photo detail page you can see an enlarged image and details about clicked photo

//Questions:
//Import json and use it to call images on needed components
//Which component do I call which json file?
//Is my category list my home page?
//How to use components in order to import them

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
//Min 27 in lecture part 1 from W6D4 is where we add react-router
//Min 35 W6D4 P1 we start to talk about actually using router
