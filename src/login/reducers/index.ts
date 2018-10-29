import * as fromLogin from './login.reducer';

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
    auth: fromLogin.State
}

export const initialState: State = {
    auth: fromLogin.initialState
}

export const reducer = {
    auth: fromLogin.reducer
};