import React, { useState, useRef, useEffect } from 'react';

import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = props => {
    const [currentGuess, setGuess] = useState(500);
    const [numRounds, setRounds] = useState(0);
    const curLow = useRef(1);
    const curHigh = useRef(1000)

    const { userChoice, onGameOver } = props;

    // After rendering 
    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(numRounds)
        } 
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
            || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('You Lied!', 'Liar Liar Bum on fire!', [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        if(direction === 'lower') 
            curHigh.current = currentGuess - 1;
        else 
            curLow.current = currentGuess + 1;

        const nextNumber = Math.floor((curHigh.current + curLow.current)/2);
        setRounds(prevRound => prevRound + 1);
        setGuess(nextNumber);
    }

    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess </Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={() => nextGuessHandler('lower')} />
                <Button title="Greater" onPress={() => { nextGuessHandler('higher') }} />
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
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;