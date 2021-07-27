import React from 'react';

import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}><Image source={require('../assets/download.jpeg')}/></View>
            <Text>Game Over! </Text>
            <Text> Number of rounds : {props.rounds} </Text>
            <Text> Number was : {props.userNumber} </Text>
            <View style={styles.button}><Button title="Restart" onPress={props.newGame}/></View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
    },
    imageContainer: {
        marginBottom: 10,
        width: '60%',
        height: 220,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        overflow:'hidden'
    }
})

export default GameOverScreen;