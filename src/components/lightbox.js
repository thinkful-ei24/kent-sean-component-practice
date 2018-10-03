
import React from 'react';
import './lightbox.css';

export default function Lightbox(props) {
  return (
    <div className="lightbox-window">
      <div>help! {props.test}</div>
    </div>
  );
}