import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, TextField, Button } from './common/index';
import {
    employeeInfoChanged,
    employeeCreate,
} from '../actions/index';

class EmployeeForm extends Component {

    static navigationOptions = {
        title: 'Add employee',
    }

    onButtonPress() {
        console.log('onButtonPress: saveEmployee START');
        const { name, phone_number, shift } = this.props;

        // picker's default value is not 'selected'
        this.props.employeeCreate({ name, phone_number, shift: shift || 'Monday' });
        console.log('onButtonPress: saveEmployee END');
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                        fieldName='Name'
                        placeholder="Enter their name"
                        onChangeText={text => this.props.employeeInfoChanged(
                            { prop: 'name', value: text }
                            )}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <TextField
                        fieldName='Phone'
                        placeholder="Enter their number"
                        onChangeText={text => this.props.employeeInfoChanged(
                            { prop: 'phone_number', value: text }
                            )}
                        value={this.props.phoneNumber}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={(day) => this.props.employeeInfoChanged(
                            { prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />

                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add
                    </Button>
                </CardSection>
            </Card>
        );
    }

}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        lineHeight: 40,
    },
}

const mapStateToProps = (state) => {
    const { name, phone_number, shift, error, loading } = state.employee;

    // this syntax is equivalent to email: state.auth.email
    // once you deconstruct auth from passed in state and email from auth
    return { name, phone_number, shift, error, loading };
};

export default connect(mapStateToProps, {
        employeeInfoChanged,
        employeeCreate,
    })(EmployeeForm);
