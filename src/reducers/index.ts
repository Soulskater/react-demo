import { combineReducers } from 'redux';

import * as fromLogin from '../login/reducers';

export interface AppState extends fromLogin.State {
}

export const initialState: AppState = {
    ...fromLogin.initialState
}

export const reducer = combineReducers<AppState>({
    ...fromLogin.reducer
});