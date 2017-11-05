import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

import { FIREBASE_API_KEY } from './config';


class App extends Component<{}> {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: FIREBASE_API_KEY,
            authDomain: 'manager-27ed0.firebaseapp.com',
            databaseURL: 'https://manager-27ed0.firebaseio.com',
            projectId: 'manager-27ed0',
            storageBucket: 'manager-27ed0.appspot.com',
            messagingSenderId: '846281007745'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store} >
              <LoginForm />
            </Provider>
        );
    }
}

export default App;
