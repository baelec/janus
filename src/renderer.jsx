// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Janus } from './Janus';
console.warn('renderer');
const root = document.getElementById('root');
console.warn(document);
if (root) {
  ReactDOM.render(
    <Janus />,
    document.getElementById('root')
  );
} else {
  console.warn('wtf');
  alert('aawtf');
}
