import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';


import {
    EMPLOYEE_INFO_CHANGED,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
} from './types';

export const employeeInfoChanged = ({ prop, value }) => {
    return {
        type: EMPLOYEE_INFO_CHANGED,
        payload: { prop, value }
    };
};

// example of Redux Thunk to perform action async by using dispatch function
export const employeeCreate = ({name, phone_number, shift}) => {

    const { currentUser } = firebase.auth();

    // even though async, we don't need to a response, this is just a push
    // so, don't need to dispatch an action
    return (dispatch) => {
        // using template strings from es6
        // use back ticks instead of single quotes (left of 1 on keyboard)
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone_number, shift })
            .then(() => {
            dispatch({ type: EMPLOYEE_CREATE })
            dispatch(NavigationActions.back());
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // syntax for fetching data is a little weird, but that's all this is
        // this is persistent - this gets called once and it continuously listens
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
}
