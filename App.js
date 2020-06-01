import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header  from "./components/header";
import InputScreen from "./components/InputScreen"
import GameScreen from './components/GameScreen';



export default function App() {

  const [userChoice ,setUserChoice] =useState();
  
   const startGameHandler = selectedNumber =>{
    setUserChoice(selectedNumber);
   };
  

   let constant = <InputScreen OnGameStart ={startGameHandler}/>;

   if (userChoice){
    constant = <GameScreen userNumber = {userChoice}/>
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
