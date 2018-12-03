import React, { Component } from 'react'

class PhotoList extends Component {
  render() {
    return (
      <ul className="photolist">
        <li>
          <p>Panda Waving</p>
          <a href="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294">
            <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
          </a>
        </li>
        <li>
          <p>Panda Wiki</p>
          <a href="https://en.wikipedia.org/wiki/Giant_panda">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG" />
          </a>
        </li>
        <li>
          <p>Miniatures Posing</p>
          <a href="https://www.instagram.com/p/BjRKLqYh4gK/?taken-by=ambethia">
            <img src="https://instagram.ftpf1-1.fna.fbcdn.net/vp/ac13de8676b9e7d7b3a4f1aaf38a9a55/5C3728A2/t51.2885-15/e35/32203464_178578342778306_8009127367152762880_n.jpg" />
          </a>
        </li>
      </ul>
    )
  }
}

export default PhotoList
