import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header  from "./components/header";
import InputScreen from "./components/InputScreen"
import GameScreen from './components/GameScreen';
import Gameover from './components/GameOver';



export default function App() {

  const [userChoice ,setUserChoice] =useState();
  const [guessRounds ,setGuessRounds]= useState(0);

   const startGameHandler = selectedNumber =>{
    setUserChoice(selectedNumber);
   };
  
   const GameOverHandler = noOfRounds =>{
 setGuessRounds(noOfRounds);
   };
  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserChoice(null);

  };

   let constant = <InputScreen OnGameStart ={startGameHandler}/>;

   if (userChoice && guessRounds <= 0){
    constant = <GameScreen userNumber = {userChoice} onGameover ={GameOverHandler} />
   }
   else if(guessRounds >0 ){
    constant = <Gameover userNumber = {userChoice} rounds={guessRounds} OnGameRestart ={configureNewGameHandler}/>

   }
  return (
    <View style ={styles.screen}>
      <Header title="Guess a Number"/>
     {constant}
      
    </View>
  );
}

const styles = StyleSheet.create({
   screen :{
     flex: 1,
     alignItems: 'center',
   }
});
