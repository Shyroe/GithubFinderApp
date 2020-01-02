import {
    SEARCH_USERS,
    GET_USER,
    SET_LOADING,
    GET_REPOS,
    CLEAR_USERS
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        case GET_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_LOADING:
            return {                
            ...state, //Return the current state
            loading: true
            }
        default:
            return state;
    }
}