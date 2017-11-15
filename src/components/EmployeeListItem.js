import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import {
    employeeSelect
} from '../actions/index';

class EmployeeListItem extends Component {

    onRowPress() {
        console.log('EmployeeListItem: onRowPress calling employeeSelect(', this.props.employee);
        this.props.employeeSelect(this.props.employee);
    }

    render() {
        const { name, shift } = this.props.employee;

        return (
            <CardSection style={styles.cardSectionStyle} >
                <View style={styles.touchableContainer}>
                <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>
                            {name} ({shift})
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </CardSection>
        );
    }
}

const styles = {
    cardSectionStyle: {
        height: 50,
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    touchableContainer: {
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'center',
        flex: 1,

    }
};

export default connect(null, { employeeSelect })(EmployeeListItem);
