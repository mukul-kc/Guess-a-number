import React, {useState} from 'react';

import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setNumber] = useState();

    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert('Invalid Number', 'Number must be between 1 and 999', [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setNumber(chosenNumber);
        setEnteredValue('');
    };

    let confirmedOutput; 
    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text> You selected </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start Game!"/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}> Start a new Game </Text>
            <Card style={styles.inputContainer}>
                <Text> Select a Number</Text>
                <Input 
                    styles={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none'
                    autoCorrect={false} 
                    keyboardType='number-pad' 
                    maxLength={3} 
                    value={enteredValue} 
                    onChangeText={inputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
        marginVertical: 5,
    },
    button: {
        width: 80,
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
    },
    input: {
        width: 50,
    },
    summaryContainer : {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;