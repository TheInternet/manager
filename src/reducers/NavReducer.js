import { AppNavigator } from '../navigation/AppNavigator';

const INITIAL_STATE = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('LoginScreen')
);

const logActionAndState = (state, action, nextState) => {
    console.log('NavReducer: action');
    console.log(action);
    console.log('NavReducer: nextState');
    console.log(nextState);
    console.log('NavReducer: state');
    console.log(state);
};

const NavReducer = (state = INITIAL_STATE, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

//    logActionAndState(state, action, nextState);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};


export default NavReducer;
