
import React from 'react';
import './image.css';

export default function Image(props) {
  return (
    <img key={props.id} className={props.className} src={props.url}
    width={props.width} height={props.height}
    onClick={e => props.imageClicked(e, props.id)}
    />
  );
}