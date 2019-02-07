import * as React from 'react';

type Props = {};

export class NotebookList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
