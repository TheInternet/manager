import {
    EMPLOYEE_INFO_CHANGED,
    EMPLOYEE_SELECT,
    EMPLOYEE_CLEAR_FORM,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone_number: '',
    shift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_INFO_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CLEAR_FORM:
            return { ...state, ...INITIAL_STATE };
        case EMPLOYEE_SELECT:
            return action.payload;
        default:
            return state;
    }
};

