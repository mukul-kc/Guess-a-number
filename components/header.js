import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingTop: 10,
        backgroundColor: '#f7287b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
});

export default Header;