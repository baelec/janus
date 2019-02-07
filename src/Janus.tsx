import * as React from 'react';
import { remote, ipcRenderer } from 'electron';
import { Button } from '@blueprintjs/core';
import { NotebookList } from './NotebookList';
import { NotebookButton } from './NotebookButton';
const main = remote.require('./main');

type Notebook = {
  id: string;
  label: string;
};

type Props = {};

type State = {
  notebooks: Notebook[];
};

export class Janus extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      notebooks: [{ id: 'a', label: 'a' }],
    };
  }

  render() {
    const onClick = () => {
      //ipcRenderer.send('async', 1);
    };
    const { notebooks } = this.state;
    return (
      <>
        <Button onClick={onClick}>Create Notebook</Button>
        <NotebookList>
          {notebooks.map(notebook => (
            <NotebookButton
              key={notebook.id}
              label={notebook.label}
              id={notebook.id}
            />
          ))}
        </NotebookList>
      </>
    );
  }
}
