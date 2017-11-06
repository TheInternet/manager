import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { Button } from '../components/common'

class DetailScreen extends Component {
    render(){
        return (
            <Button onPress= {() => this.props.navigation.navigate('Login')}>
                Go to Login
            </Button>
        )
    }
}

export default DetailScreen;
