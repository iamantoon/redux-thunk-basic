import {ADD_USERS} from './usersActions';
import {SET_LOADING} from './usersActions';
import {SET_ERROR} from './usersActions';

const initialState = {
    users: [],
    error: null,
    status: 'idle'
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USERS: 
            return {
                ...state,
                users: action.payload,
                status: 'fulfilled'
            }
        case SET_LOADING: 
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                status: 'rejected'
            }
        default: 
            return state;
    }
}