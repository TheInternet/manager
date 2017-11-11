import React, { Component } from 'react';
import _ from 'lodash';
import { List, ListItem } from 'react-native-elements';
import { Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

const USE_LISTS_I_BUILT = false;

class EmployeesList extends Component {

    static navigationOptions = ({ navigation }) => ({
            title: 'All employees',
            headerRight: (<Button
                title='Add'
                onPress={() => navigation.navigate('EmployeeForm')}
            />),
        })

    componentWillMount() {
        this.props.employeesFetch();
    }

    renderRow(employeeWithMetadata) {
        if (USE_LISTS_I_BUILT) {
            // lodash adds metadata, so using employeeWithMetadata.item
            // to just pass along the 'employee'
            return <EmployeeListItem employee={employeeWithMetadata.item} />;
        }
        return (
            <ListItem
            key={employeeWithMetadata.item.key}
            title={employeeWithMetadata.item.name}
            subtitle={employeeWithMetadata.item.shift}
            />
        );
    }

    render() {
        if (USE_LISTS_I_BUILT) {
            return (
                <FlatList
                    data={this.props.employees}
                    renderItem={this.renderRow}
                />
            );
        }
        return (
                <List>
                    <FlatList
                    data={this.props.employees}
                    renderItem={this.renderRow}
                    />
                </List>
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
    [ name: "Tim", phone_number: "555", shift: "Monday", key: "KyWx1m4Oc95yJWx1nR4" ]
     */
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, key: uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeesList);
