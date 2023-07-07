import {combineReducers} from 'redux';

import {usersReducer} from './users/usersReducer';
import {todosReducer} from './todos/todosReducer';

export const rootReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer
})