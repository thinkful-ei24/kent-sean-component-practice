
import React from 'react';
import Image from './image';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: 300,
      imageHeight: 300,
      images: props.images
    };
  }

  handleClick = (event) => {
    console.log(event.target.src);
  }

  render() {
    const renderedImages = this.state.images.map(imgData => {
      return (
        <div className="image-container">
          <Image key={imgData.id} url={imgData.url} width={this.state.imageWidth}
          height={this.state.imageHeight} imageClicked={this.handleClick}/>
        </div>
      )
    });

    return (
      <div>
        {renderedImages}
      </div>
    );
  }
}