
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

  handleClick = (event, key) => {
    console.log(key);
    console.log(event.target);
    const img = this.state.images.find(image => {
      return image.id === key;
    });
    console.log(img);
  }

  render() {
    const renderedImages = this.state.images.map(imgData => {
      return (
        <div className="image-container">
          <Image id={imgData.id} url={imgData.url} width={this.state.imageWidth}
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