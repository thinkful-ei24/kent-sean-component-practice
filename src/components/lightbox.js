
import React from 'react';
import Image from './image';
import './lightbox.css';

export default function Lightbox(props) {
  return (
    <div className="lightbox-window" onClick={e => props.lightboxClicked()}>
      <div className="lightbox-image-container">
        <button onClick={e => props.buttonClicked(e)} name="back-button">Back</button>
        <img className="lightbox-image" src={props.url} />
        <button onClick={e => props.buttonClicked(e)} name="forward-button">Forward</button>
      </div>
    </div>
  );
}