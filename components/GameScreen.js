import React , {useState , useRef} from 'react';
import {View , Text ,Button , StyleSheet, Alert } from 'react-native';

import NumberContainer from './Number';
import Card from './card';

const randomNumberGenrator = (min , max , exclude) =>{

    min =Math.ceil(min);
    max = Math.floor(max);

    const rndmNum = Math.floor(Math.random()  * (max-min)) + min;
     console.log("Component re-render randomNumber");
    
     if (rndmNum === exclude){
         return randomNumberGenrator(min ,max ,exclude);

     }else{

        return rndmNum;
     }

  

};

const GameScreen = props => {
 const [computerGuess , setComputerGuess] = useState(randomNumberGenrator( 0 , 100 , props.userNumber));
 console.log("Component re-render");
 const LowerGuess = useRef(1);
 const UpperGuess =useRef(100);
 const nextRandomNumberGen = direction => {
   console.log(props.userNumber);
    if ((direction === 'Lower' && computerGuess < props.userNumber) ||
     (direction ==='Upper' && computerGuess > props.userNumber)){
         Alert.alert('Don\'t Lie! ' ,"You are a cheater" , [{text:"Okay" ,style:'Cancel' }]);
        return;
    }
    if(direction=== "Lower"){

        UpperGuess.current = computerGuess;

    }
    else{
        LowerGuess.current = computerGuess;
    }

    console.log("Component re-render 1");
    const nextNumberGen = randomNumberGenrator(LowerGuess.current , UpperGuess.current , computerGuess);
    console.log("Component re-render 2");
    setComputerGuess(nextNumberGen);
    console.log("Component re-render 3");
 };
    return(
   <View style = {styles.screen}>
        <Text>Opponent Guess</Text>
        <NumberContainer>
        {computerGuess}
        </NumberContainer>
    <Card style ={styles.buttonContainer}>
        <Button  title ="LOWER" onPress= {nextRandomNumberGen.bind(this ,"Lower")}/>
         <Button title ="GREATER" onPress= {nextRandomNumberGen.bind(this ,"Upper")}/>
        
        </Card>
   </View>
    );

};


const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 20,
        width : 300,
        maxWidth: '80%',
    },
    screen:{
        flex: 1,
        alignItems: 'center',
    }

});


export default GameScreen;