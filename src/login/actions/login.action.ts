import { Dispatch } from 'redux';

import { ILoginData } from '../models/login-data.interface';
import { IUser } from '../models/user.interface';
import { AuthRepository } from '../repositories/auth.repository';

export enum ActionTypes {
  LOGIN = '[auth] LOGIN',
  LOGIN_SUCCESS = '[auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[auth] LOGIN_FAILED'
}

export interface LoginAction { type: ActionTypes.LOGIN, payload: {} }
export interface LoginSuccessAction { type: ActionTypes.LOGIN_SUCCESS, payload: { user: IUser } }
export interface LoginFailedAction { type: ActionTypes.LOGIN_FAILED, payload: { error: any } }

export function createLoginAction(): LoginAction {
  return {
    type: ActionTypes.LOGIN,
    payload: {}
  }
}

export function requestLoginAction(loginData: ILoginData) {
  return function (dispatch: Dispatch<string>) {
    dispatch(createLoginAction());
    return AuthRepository.login(loginData)
      .then(
        user => dispatch(createLoginSuccessAction(user)),
        error => dispatch(createLoginFailedAction(error))
      );
  }
}

export function createLoginSuccessAction(user: IUser): LoginSuccessAction {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: {
      user
    }
  }
}

export function createLoginFailedAction(error: any): LoginFailedAction {
  return {
    type: ActionTypes.LOGIN_FAILED,
    payload: {
      error
    }
  }
}

export type Action = LoginAction | LoginSuccessAction | LoginFailedAction