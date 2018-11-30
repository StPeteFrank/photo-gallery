import React, { Component } from 'react'
import sample from './sample.json'

class PhotoList extends Component {
  render() {
    return <p>Photo List</p>
    <div>
      <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG" />
    </div>
  }
}

export default PhotoList
