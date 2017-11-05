import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

/*
NEVER CHANGE STATE IN REDUCERS OR COMPONENTS WON'T BE REDRAWN
const oldState = {};
const newState = oldState;  // POINTS TO SAME OBJECT
newState.color = 'red';
if(newState===oldState)  // THIS IS NOW TRUE, SO NO STATE CHANGE
 */


export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            /* syntax of return explained
            {} means create new object
            ...state means add each element of state to this new object
            email: action.payload means add this field or overwrite existing field
             */
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return {
                ...state, ...INITIAL_STATE, user: action.payload
            };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        default:
            return state;
    }
};