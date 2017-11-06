import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, TextField, Button, Spinner } from '../components/common';
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginScreen extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password, navigation } = this.props;

        this.props.loginUser({ email, password, navigation });

    }

    renderButton() {
        if (this.props.loading) {
            return (<Spinner size='large' />);
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign In / Sign Up
            </Button>
        )
    }

    render() {
        return (
            <View style={styles.backgroundViewStyle}>
            <Card>
                <CardSection>
                    <TextField
                        fieldName='Email'
                        placeholder='Enter your email'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <TextField
                        secureTextEntry
                        fieldName='Password'
                        placeholder='Enter your password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
                </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    backgroundViewStyle: {
        flex: 1,
        backgroundColor: 'white',
    }
}

// state is our global application state from REDUX
// this function maps the email field to our local gmail prop
const mapStateToProps = ({ auth })=> {
    const { email, password, error, loading } = auth;

    // this syntax is equivalent to email: state.auth.email
    // once you deconstruct auth from passed in state and email from auth
    return { email, password, error, loading };
}

export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser })(LoginScreen);