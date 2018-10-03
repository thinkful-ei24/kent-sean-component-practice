
import React from 'react';
import './lightbox.css';

export default function Lightbox(props) {
  return (
    <div className="lightbox-window" onClick={e => props.lightboxClicked()}>
      <div className="lightbox-image-container">
        <button onClick={e => e.stopPropagation()}>Back</button>
        <img className="lightbox-image" src={props.url}/>
        <button onClick={e => e.stopPropagation()}>Forward</button>
      </div>
    </div>
  );
}