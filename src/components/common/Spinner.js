// import
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// create
const Spinner = ({ size }) => {
    const { spinnerStyle } = styles;

    return (
        <View>
            <ActivityIndicator size={ size || 'large'} />
        </View>
    )


};

// styling
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
};

// export
export { Spinner };
