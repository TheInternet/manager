// import
import React from 'react';
import { View } from 'react-native';

// create
const CardSection = (props) => {
    return (
        <View style= {styles.containerStyle}>
            {props.children}
        </View>
    )
};

// styling
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

};

// export
export { CardSection };
