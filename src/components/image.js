
import React from 'react';
import './image.css';

export default function Image(props) {
  return <img key={props.key} src={props.url} width={props.width} height={props.height}
    onClick={e => props.imageClicked(e)}/>;
}