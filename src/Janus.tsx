import * as React from 'react';
import { remote, ipcRenderer } from 'electron';
import {NotebookList} from "./NotebookList";
import {NotebookButton} from "./NotebookButton";
const main = remote.require('./main');

export class Janus extends React.PureComponent {
  render() {
    const onClick = () =>{
      ipcRenderer.send('async', 1);
    };
    return (
      <>
        <button onClick={onClick}>HIAa</button>
        <NotebookList>
          <NotebookButton id='0' label='nb0'/>
        </NotebookList>
      </>
    );
  }
}