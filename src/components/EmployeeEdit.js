import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, ConfirmModal } from './common/index';
import EmployeeForm from './EmployeeForm';
import { employeeSave, employeeClearSelected, employeeDelete } from '../actions/index';

class EmployeeEdit extends Component {
    static navigationOptions = {
        title: 'Edit employee',
    }

    // using component level state for showModal
    // app uses Redux, but this is of so little concern to anything else
    state = { showModal: false };

    // form is pre-filled before this by employeeSelect in EmployeeActions.js
    // I think I could have passed via react navigation navigationOptions params instead

    componentWillUnmount() {
        // this clears the pre-fill covering the case user goes back
        // save button also clears the button (meaning this is redundant in that case)
        this.props.employeeClearSelected();
    }

    onSavePress() {
        const { name, phone_number, shift, uid } = this.props;
        console.log('EmployeeEdit onSavePress: ', name, phone_number, shift, uid);
        this.props.employeeSave({ name, phone_number, shift, uid });
    }

    onTextPress() {
        const { name, phone_number, shift } = this.props;
        Communications.text(phone_number, `Hi ${name}, your upcoming shift is on ${shift}.`);
    }

    onAccept() {
        const { uid } = this.props;
        this.props.employeeDelete({ uid });
        this.setState({ showModal: false });
    }


    onDecline() {
        console.log('employeeEdit this.props', this.props);

        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onSavePress.bind(this)}>
                        Save
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <ConfirmModal
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </ConfirmModal>
            </Card>
        );
    }

}

const mapStateToProps = (state) => {
    const { name, phone_number, shift, uid } = state.employeeForm;
    console.log('EmployeeEdit: mapStateToProps ', name, phone_number, shift, uid);

    // this syntax is equivalent to email: state.auth.email
    // once you deconstruct auth from passed in state and email from auth
    return { name, phone_number, shift, uid };
};

export default connect(mapStateToProps, {
        employeeSave, employeeClearSelected, employeeDelete
    })(EmployeeEdit);
