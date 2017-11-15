import React, { Component } from 'react';
import _ from 'lodash';
import { Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';


class EmployeesList extends Component {

    static navigationOptions = ({ navigation }) => ({
            title: 'All employees',
            headerRight: (<Button
                title='Add'
                onPress={() => navigation.navigate('EmployeeCreate')}
            />),
        })

    componentWillMount() {
        this.props.employeesFetch();
    }

    renderRow(employeeWithMetadata) {
        // lodash adds metadata, so using employeeWithMetadata.item
        // to just pass along the 'employee'
        return <EmployeeListItem employee={employeeWithMetadata.item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderRow}
                keyExtractor={employee => employee.uid}
            />
        );
    }
}

const mapStateToProps = state => {
    /*
    lowdash _.map will iterate through objects and turns into arrays

    WAS:
    "-KyWx1m4Oc95yJWx1nR4": Object {
    "name": "Tim",
    "phone_number": "555",
    "shift": "Monday",

    NOW:
    [ name: "Tim", phone_number: "555", shift: "Monday", uid: "KyWx1m4Oc95yJWx1nR4" ]
     */
    const employees = _.map(state.employees, (val, uid) => ({ ...val, uid: uid }));
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeesList);
