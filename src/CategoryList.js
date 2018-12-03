import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import samples from './samples.json'

class CategoryList extends Component {
  render() {
    return (
      <h3>
        {Object.keys(samples).map(category => {
          return (
            <h3 key={category}>
              <Link to={`/${category}`}>{samples[category].title}</Link>
            </h3>
          )
        })}
      </h3>
    )
  }
}

export default CategoryList
