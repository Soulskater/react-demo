import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { AppState, reducer } from '../reducers';

const store = createStore<AppState>(reducer, applyMiddleware(thunkMiddleware, logger))

export default store