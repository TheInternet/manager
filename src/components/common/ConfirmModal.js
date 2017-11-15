import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


// create
const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles;

    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',  // 4th number is opacity
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        lineHeight: 40,
    },
};

// export
export { ConfirmModal };
