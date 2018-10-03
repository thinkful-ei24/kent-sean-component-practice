import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './components/gallery';
import * as serviceWorker from './serviceWorker';

import data from './demoData.json';
ReactDOM.render(<Gallery images={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
