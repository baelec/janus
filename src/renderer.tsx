// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Janus } from './Janus';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Janus />, document.getElementById('root'));
}
