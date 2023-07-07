import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {client} from './../api';
import {rootReducer} from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(client)));