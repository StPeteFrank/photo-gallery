import React, { Component } from 'react'

import samples from './samples.json'

class PhotoDetail extends Component {
  render() {
    const categoryData = samples['pandas']
    const photoIndex = 0

    return (
      <div>
        <h2>{categoryData.photos[photoIndex].title}</h2>
        <img src={categoryData.photos[photoIndex].imageURL} />
      </div>
    )
  }
}

export default PhotoDetail
