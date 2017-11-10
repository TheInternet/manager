import React from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import { EmployeeNavigator } from './EmployeeNavigator';

const routeConfigs = {
    LoginScreen: { screen: LoginScreen },
    EmployeeNavigator: { screen: EmployeeNavigator, navigationOptions: { header: null } },
};

const stackNavigatorConfigs = {
    // don't currently have any
};

export const AppNavigator = StackNavigator(
    routeConfigs,
//    stackNavigatorConfigs
);

// Untested
// By using the following snippet, your nav component will be aware of the back button press
// actions and will correctly interact with your stack. This is really useful on Android.
class ReduxNavigation extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
}

/*
Once you do this, your navigation state (nav) is stored within your redux store,
at which point you can fire navigation actions using your redux dispatch function.
 */
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

/*
You can use prop-types to document the intended types of properties passed to components.
React (and potentially other libraries—see the checkPropTypes() reference below) will
check props passed to your components against those definitions, and warn in development
if they don’t match.
 */
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
