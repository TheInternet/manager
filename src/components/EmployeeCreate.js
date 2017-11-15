import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common/index';
import EmployeeForm from './EmployeeForm';
import { employeeCreate } from '../actions/index';

class EmployeeCreate extends Component {

    static navigationOptions = {
        title: 'Add employee',
    }

    onButtonPress() {
        const { name, phone_number, shift } = this.props;

        // picker's default value is not 'selected'
        this.props.employeeCreate({ name, phone_number, shift: shift || 'Monday' });
    }


    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add
                    </Button>
                </CardSection>
            </Card>
        );
    }

}


const mapStateToProps = (state) => {
    const { name, phone_number, shift } = state.employeeForm;
    console.log('EmployeeCreate: mapStateToProps ', name, phone_number, shift);

    // this syntax is equivalent to email: state.auth.email
    // once you deconstruct auth from passed in state and email from auth
    return { name, phone_number, shift };
};

export default connect(mapStateToProps, {
        employeeCreate,
    })(EmployeeCreate);
