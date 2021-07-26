import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setNumber] = useState();
  
  const startGameHandler = (selectedNumber) => {
    setNumber(selectedNumber);
  }
  return (
    <View style = {styles.screen}>
      <Header title="Guess a Number"/>
      {userNumber ? <GameScreen userChoice={userNumber}/> : <StartGameScreen setNumber = {startGameHandler}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
