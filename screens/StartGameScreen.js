import React from 'react';

import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
        <Text style = {styles.title}> Start a new Game </Text>
        <Card style={styles.inputContainer}>
            <Text> Select a Number</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Button title="Confirm" onPress={() => {}}/>
                <Button title="Reset" onPress={() => {}}/>
            </View>
        </Card>
    </View>
  );  
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    }
});

export default StartGameScreen;