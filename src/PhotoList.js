import React, { Component } from 'react'

import samples from './samples.json'

import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const categoryData = samples[category]
    return (
      <h4 className="photolist">
        {categoryData.photos.map((photo, index) => {
          return (
            <p key={index}>
              <Link to={`/${category}/${index}`}>
                <h4>{photo.title}</h4>

                <img src={photo.imageURL} />
              </Link>
            </p>
          )
        })}
      </h4>
    )
  }
}

export default PhotoList
