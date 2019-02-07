import React from 'react';
import { Button } from '@blueprintjs/core';

type Props = {
  label: string;
  id: string;
};

export class NotebookButton extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { label, id } = this.props;
    return <Button onClick={() => alert(id)}>{label}</Button>;
  }
}
