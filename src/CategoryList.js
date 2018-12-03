import React, { Component } from 'react'

import samples from './samples.json'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        {Object.keys(samples).map(category => {
          return (
            <li key={category}>
              <a href={`/${category}`}>{samples[category].title}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoryList
