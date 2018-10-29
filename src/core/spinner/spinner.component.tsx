import './spinner.component.scss';

import * as React from 'react';

interface Props {
  show: boolean;
}

interface State {

}

export class Spinner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return this.props.show ?
      <div className="loading-overlay" style={{ height: '9%' }}>
        <div className="sp sp-circle" />
      </div>
      : null;
  }
}