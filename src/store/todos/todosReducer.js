import {ADD_TODOS} from './todosActions';
import {SET_LOADING} from './todosActions';
import {SET_ERROR} from './todosActions';
import {ADD_TODO} from './todosActions';
import {REMOVE_TODO} from './todosActions';
import {TOGGLE_TODO} from './todosActions';

const initialState = {
    status: 'idle',
    list: [],
    error: null
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TODOS: return {
            ...state, 
            list: action.payload,
            status: 'fulfilled'
        }
        case ADD_TODO: return {
            ...state,
            list: [...state.list, action.payload]
        }
        case REMOVE_TODO: return {
            ...state,
            list: state.list.filter(todo => todo.id !== action.payload)
        }
        case TOGGLE_TODO: return {
            ...state,
            list: state.list.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }
        case SET_LOADING: return {
            ...state,
            status: 'pending',
            error: null
        }
        case SET_ERROR: return {
            ...state,
            error: action.payload,
            status: 'rejected'
        }
        default: 
            return state;
    }
}