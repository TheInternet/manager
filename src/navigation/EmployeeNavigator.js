import { StackNavigator } from 'react-navigation';
import EmployeesList from '../components/EmployeesList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const routeConfigs = {
    EmployeesList: { screen: EmployeesList },
    EmployeeCreate: { screen: EmployeeCreate },
    EmployeeEdit: { screen: EmployeeEdit }
};

const stackNavigatorConfigs = {
  initialRouteName: 'EmployeesList'
};

export const EmployeeNavigator = StackNavigator(
    routeConfigs,
    stackNavigatorConfigs
);

export default EmployeeNavigator;
