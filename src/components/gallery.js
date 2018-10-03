
import React from 'react';
import Image from './image';
import Lightbox from './lightbox'
import PropTypes from 'prop-types';

export default class Gallery extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isLightboxActive: false,
      lightboxImage: {},
      imageWidth: 300,
      imageHeight: 300,
      images: props.images
    };
  }

  handleImageClick = (event, key) => {
    const img = this.state.images.find(image => {
      return image.id === key;
    });
    
    this.setState({
      isLightboxActive: true,
      lightboxImage: img
    });
  }

  handleLightboxClick = (event) => {
    this.setState({
      isLightboxActive: false
    });
  }

  render() {
    const renderedImages = this.state.images.map(imgData => {
      return (
        <div className="image-container">
          <Image id={imgData.id} url={imgData.url} width={this.state.imageWidth}
          height={this.state.imageHeight} imageClicked={this.handleImageClick}/>
        </div>
      )
    });

    let renderLightbox = <div></div>;     
    if (this.state.isLightboxActive) {
      renderLightbox = (
        <div>
          <Lightbox url={this.state.lightboxImage.url} lightboxClicked={this.handleLightboxClick} />
        </div>
      )
    } 

    return (
      <div>
        {renderLightbox}
        <div>
          {renderedImages}
        </div>
      </div>
    );
  }
}