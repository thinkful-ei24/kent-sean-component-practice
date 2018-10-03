
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
      currentIndex: -1,
      imageWidth: 300,
      imageHeight: 300,
      images: props.images
    };
  }

  handleImageClick = (event, key) => {
    const index = this.state.images.findIndex(image => {
      return image.id === key;
    });
    
    this.setState({
      isLightboxActive: true,
      lightboxImage: this.state.images[index],
      currentIndex: index
    });
  }

  handleLightboxClick = (event) => {
    this.setState({
      isLightboxActive: false
    });
  }

  handleButtonClick = (event) => {
    event.stopPropagation();
    const buttonName = event.target.name;
    const oldIndex = this.state.currentIndex;
    let newIndex = -1;
    if(buttonName === "forward-button") {
      newIndex = this._getWrappedIndex(oldIndex+1);
    } else if(buttonName === "back-button") {
      newIndex = this._getWrappedIndex(oldIndex-1);
    }

    this.setState({
      currentIndex: newIndex,
      lightboxImage: this.state.images[newIndex]
    });
  }

  _getWrappedIndex = (index) => {
    const length = this.state.images.length;
    let wasNegative = false;
    if(index < 0) {
      wasNegative = true;
      index = -index;
    }
    const offset = index % length;
    const newIndex = wasNegative ? (length-offset) : offset;
    return newIndex;
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
          <Lightbox url={this.state.lightboxImage.url} lightboxClicked={this.handleLightboxClick} buttonClicked={this.handleButtonClick}/>
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