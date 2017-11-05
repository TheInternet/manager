// import
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

// create
const TextField = ({ fieldName, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, fieldTextStyle, inputTextStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={fieldTextStyle}>{fieldName}</Text>
            <TextInput
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style = {inputTextStyle}
                placeholder = { placeholder }
                value = { value }
                onChangeText = { onChangeText }
            />
        </View>
    )


};

// styling
const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fieldTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    inputTextStyle: {
        color: '#000000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    }
};

// export
export { TextField };
