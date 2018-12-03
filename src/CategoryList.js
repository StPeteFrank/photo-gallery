import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import samples from './samples.json'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        {Object.keys(samples).map(category => {
          return (
            <li key={category}>
              <Link to={`/${category}`}>{samples[category].title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoryList
