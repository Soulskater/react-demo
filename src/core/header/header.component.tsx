import './header.component.scss';

import * as React from 'react';
import { connect } from 'react-redux';

import { IUser } from '../../login/models/user.interface';
import { AppState } from '../../reducers';

interface Props {
  title?: string;
  currentUser?: IUser;
}

interface State {
}

export class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="app-header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): Props => ({
  currentUser: state.auth.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any): Props => ({
});

export default connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(Header);