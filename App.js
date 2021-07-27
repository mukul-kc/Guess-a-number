import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setNumber] = useState();
  const [rounds, setRound] = useState(0);
  
  const startGameHandler = (selectedNumber) => {
    setNumber(selectedNumber);
    setRound(0);
  }

  const gameOverHandler = numRound => {
    setRound(numRound);
  }

  const newGameHandler = () => {
    setRound(0);
    setNumber(null);
  }

  let content = <StartGameScreen setNumber = {startGameHandler}/>;
  
  if(userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }
  else if(rounds > 0)  
    content = <GameOverScreen rounds={rounds} userNumber = {userNumber} newGame={newGameHandler}/>

  return (
    <View style = {styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
