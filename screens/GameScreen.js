import React, { useState, useRef, useEffect } from 'react';

import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = props => {
    const [currentGuess, setGuess] = useState(500);
    const [pastGuesses, setPastGuess] = useState([500]);
    const curLow = useRef(1);
    const curHigh = useRef(1000)

    const { userChoice, onGameOver } = props;

    // After rendering 
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
            || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('You Lied!', 'Liar Liar Bum on fire!', [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower')
            curHigh.current = currentGuess - 1;
        else
            curLow.current = currentGuess + 1;

        const nextNumber = Math.floor((curHigh.current + curLow.current) / 2);
        setPastGuess(curPastGuesses => [nextNumber, ...curPastGuesses]);
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
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list} >
                    {pastGuesses.map((val, ind) => {
                        return (
                            <View style={styles.listItem} key={ind}>
                                <Text> Guess #{pastGuesses.length - ind} </Text>
                                <Text> {val} </Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: 300,
        maxWidth: '80%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 250,
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listContainer: {
        flex: 1,
        padding: 10,
        width: '80%'
    }
});

export default GameScreen;