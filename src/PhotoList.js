import React, { Component } from 'react'

import samples from './samples.json'

class PhotoList extends Component {
  render() {
    const categoryData = samples['pandas']

    return (
      <ul className="photolist">
        {categoryData.photos.map(photo => {
          return (
            <li>
              <p>{photo.title}</p>
              <a href={photo.sourceURL}>
                <img src={photo.imageURL} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PhotoList
