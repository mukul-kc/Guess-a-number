import React, { useState } from 'react';

import {View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    const ans = Math.floor(Math.random()*(max-min)) + min;
    if(ans == exclude) generateRandomBetween(min,max,exclude);
    else return ans;
}

const GameScreen = props => {
    const [currentGuess, setGuess] = useState(generateRandomBetween(1,999, props.userChoice));

    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess </Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={() => {}}/>
                <Button title="Greater" onPress={() => {}}/>    
            </Card> 
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       marginTop: 20,
       width:300,
       maxWidth: '80%'
    }
});

export default GameScreen;