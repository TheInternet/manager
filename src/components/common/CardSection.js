// import
import React from 'react';
import { View } from 'react-native';

// create
const CardSection = (props) => {
    // style={[styles.containerStyle, props.style]}
    // any primative element (view, text, etc) can take an array of styles
    // it will use the style most to the right
    // so here, if style passed in as a prop it overrides styles.containerStyle
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
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
        position: 'relative',
    }

};

// export
export { CardSection };
