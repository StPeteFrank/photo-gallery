import React, { Component } from 'react'

import samples from './samples.json'

import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const categoryData = samples[category]
    return (
      <ul className="photolist">
        {categoryData.photos.map((photo, index) => {
          return (
            <li key={index}>
              <p>{photo.title}</p>

              <Link to={`/${category}/${index}`}>
                <img src={photo.imageURL} />
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PhotoList
