import { Action, ActionTypes } from '../actions/login.action';
import { IUser } from '../models/user.interface';

export interface State {
  loggingIn: boolean;
  error: any;
  user: IUser;
}

export const initialState: State = {
  loggingIn: false,
  error: null,
  user: null
}

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    case ActionTypes.LOGIN: {
      return {
        ...state,
        loggingIn: true
      }
    }
    case ActionTypes.LOGIN_SUCCESS: {
      const user = action.payload.user;
      return {
        ...state,
        loggingIn: false,
        user
      }
    }
    case ActionTypes.LOGIN_FAILED: {
      const error = action.payload.error;
      return {
        ...state,
        loggingIn: false,
        error
      }
    }
    default:
      return state
  }
}