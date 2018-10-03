import * as React from 'react';
import { remote, ipcRenderer } from 'electron';
const main = remote.require('./main');

export const Janus = () => {
  return <button onClick={() =>{
    ipcRenderer.send('async', 1);
  }}>HIAa</button>;
};