import './login.component.scss';

import * as React from 'react';
import { connect } from 'react-redux';

import MaterialButton from '../../core/material-button/material-button';
import MaterialInput from '../../core/material-input/material-input';
import { Spinner } from '../../core/spinner/spinner.component';
import { AppState } from '../../reducers';
import { requestLoginAction } from '../actions/login.action';
import { ILoginData } from '../models/login-data.interface';

interface Props {
  showLoading?: boolean;
  onLoginClicked?: (loginData: ILoginData) => void
}

interface State {
  loginData: ILoginData;
}

class LoginComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: ''
      }
    };
  }
  render() {
    return <div className="login-page">
      <div className="login-form">
        <h2>LOGIN</h2>
        <MaterialInput type="text" className="login-input" placeholder="Email address" style="rounded"
          onValueChange={(event) => this.onEmailCange(event)} />
        <MaterialInput type="password" className="login-input" placeholder="Password" style="rounded"
          onValueChange={(event) => this.onPasswordCange(event)} />
        <MaterialButton title="Login" className="login-button" onClick={() => this.props.onLoginClicked(this.state.loginData)} />
        <Spinner show={this.props.showLoading} />
      </div>
    </div>
  }

  private onEmailCange(value: string) {
    this.setState({
      loginData: { ...this.state.loginData, email: value }
    });
  }

  private onPasswordCange(value: string) {
    this.setState({
      loginData: { ...this.state.loginData, password: value }
    });
  }
}

const mapStateToProps = (state: AppState): Props => ({
  showLoading: state.auth.loggingIn
});

const mapDispatchToProps = (dispatch: any, ownProps: any): Props => ({
  onLoginClicked: (loginData) => dispatch(requestLoginAction(loginData))
});

export const Login = connect<any, any, Props>(mapStateToProps, mapDispatchToProps)(LoginComponent);