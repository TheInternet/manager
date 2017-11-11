import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeesReducer';

export default combineReducers({
    auth: AuthReducer,
    nav: NavReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeesReducer,
});
