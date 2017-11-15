import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, TextField } from './common/index';
import { employeeInfoChanged } from '../actions/index';

class EmployeeForm extends Component {


    render() {
        return (
            <View>
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
                        value={this.props.phone_number}
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
            </View>
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

// mapStateToProps for name, phone_number, and shift happens in parents

export default connect(null, {
        employeeInfoChanged,
    })(EmployeeForm);
