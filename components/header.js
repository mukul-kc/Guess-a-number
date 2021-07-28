import React from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Color from '../constants/colors';


const Header = props => {
    return (
        <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
            <Text style={styles.headerTitle}> {props.title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 50,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Color.primary,
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'black',
        fontSize: 18,
    }
});

export default Header;