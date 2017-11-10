import { StackNavigator } from 'react-navigation';
import EmployeesList from '../components/EmployeesList';
import EmployeeForm from '../components/EmployeeForm';

const routeConfigs = {
    EmployeesList: { screen: EmployeesList },
    EmployeeForm: { screen: EmployeeForm }
};

const stackNavigatorConfigs = {
  initialRouteName: 'EmployeesList'
};

export const EmployeeNavigator = StackNavigator(
    routeConfigs,
    stackNavigatorConfigs
);

export default EmployeeNavigator;
