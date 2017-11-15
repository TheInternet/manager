import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, TextField, Button, Spinner } from './common/index';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';

class LoginScreen extends Component {

    static navigationOptions = {
        title: 'Please Log In',
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return (<Spinner size='large' />);
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign In / Sign Up
            </Button>
        );
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
};

// state is our global application state from REDUX
// this function maps the email field to our local email prop
const mapStateToProps = (state) => {
    const { email, password, error, loading } = state.auth;

    // this syntax is equivalent to email: state.auth.email
    // once you deconstruct auth from passed in state and email from auth
    return { email, password, error, loading, };
};


// connect([mapStateToProps], [mapDispatchToProps], [mergeprops], [options])
// redux + react navigation: to enable dispatch must create actions & connect to components w/ nav
// e.g. loginUser (on this form) or employeeSelect (on employeeListItem)
export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser })(LoginScreen);
