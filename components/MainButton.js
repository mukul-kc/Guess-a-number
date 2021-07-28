import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.version >= 21) ButtonComponent = TouchableNativeFeedback;

    return (
        <View style= {styles.buttonContainer}>
        <ButtonComponent onPress = {props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View> 
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: hidden,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default MainButton;