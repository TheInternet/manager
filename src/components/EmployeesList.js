import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeesList extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'All employees',
            headerRight: (<Button
                title='Add'
                onPress={() => navigation.navigate('EmployeeForm')}
            />),
        };
    }

    componentWillMount() {
        this.props.employeesFetch();
    }

    render() {
        return (
            <View>
                <Text>Employee</Text>
                <Text>Employee</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        employees: state.employees
    });
};

export default connect(mapStateToProps, { employeesFetch })(EmployeesList);
