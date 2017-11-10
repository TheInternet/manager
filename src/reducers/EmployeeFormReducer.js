import {
    EMPLOYEE_INFO_CHANGED,
    EMPLOYEE_CREATE,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone_number: '',
    shift: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_INFO_CHANGED:
            /*
            [] is not an array, its called key interpolation from es6
            it is equivalent to:
            const newState = {};
            newState[action.payload.prop] = action.payload.value
             */
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};

