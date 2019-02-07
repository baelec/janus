import * as React from 'react';

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
    return (
      <button onClick={() => alert(id)}>{label}</button>
    );
  }
}