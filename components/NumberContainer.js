import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
    // props.children are the components between the opening and closing tags of this component 
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 25,
    }
});


export default NumberContainer;