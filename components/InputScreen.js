import React ,{useState} from 'react';
import {View , StyleSheet , Text  , Button ,TouchableWithoutFeedback, Keyboard , Alert} from 'react-native';
import Card from  './card';
import Input from './Input';
import Color from './color';
import Number from './Number';
const InputScreen = props => {

    const [enterInput , setEnterInput] = useState ('');
    const [confirmed , setIsConfirmed] = useState(false);
    const  [InputValue , setInputValue] = useState();
     const InputHandler = inputText =>{
        setEnterInput(inputText.replace(/[^0-9]/g ,''));
     };
     
     const resetInputHandler = () =>{
        setEnterInput('');
        setIsConfirmed(false);
     };

     const confirmInputHandler = () =>{
         const ChoosenNumber  = parseInt(enterInput);
         if ( isNaN(ChoosenNumber) || ChoosenNumber > 99|| ChoosenNumber <=0){
            Alert.alert('Invalid Number' , 'Number has to be between 1 to 99', [{text :'Okay',style : 'destructive' , onPress : resetInputHandler}]);
            return;
         }
         setEnterInput('');
         console.log("I am console Merge Conflicts")
        setInputValue(ChoosenNumber);
        setIsConfirmed(true);
        Keyboard.dismiss();
     };

     let confirmedInput; 
     if(confirmed){
     confirmedInput =<Card style={styles.displayInput}> 
     <Text>You selected </Text>
     <Number>
         <Text>{InputValue}</Text>
     </Number>
     <Button title="START GAME" onPress ={()=> {props.OnGameStart(InputValue)}}/>
     </Card>;
     }
    return(
        <TouchableWithoutFeedback onPress ={() =>{
            Keyboard.dismiss();
        }}>
            <View style = {styles.viewScreen}>
        <Card style = {styles.screen}> 
         <Text>Start the Game!</Text>
         <Input  style= {styles.input} maxLength ={2} keyboardType = "numeric"  blurOnSubmit onChangeText= {InputHandler} value ={enterInput}/>
         <View style ={styles.buttonContainer}>
             <View style ={styles.button}>
                 <Button title ="Reset"  onPress ={resetInputHandler} color = {Color.primary}/>
             </View>
             <View style ={styles.button}>
             <Button title ="Confirm" onPress ={confirmInputHandler} color ={Color.secondary} />
             </View>

         </View>
        </Card >
        
        {confirmedInput}
        </View>
        </TouchableWithoutFeedback>
    );

};


const styles = StyleSheet.create ({
 
    screen :{
     alignItems:'center',
     width : 300,
     maxWidth: '80%',
     justifyContent :'center',
    },
    input :{
     width : 50,
     textAlign : 'center',
    },
    button :{
        width: 100,
    },
    buttonContainer:{
      flexDirection : 'row',
      justifyContent :'space-between',
      width :"100%",
      marginTop: 30,
    },
    viewScreen:{
        flex: 1,
    },
    displayInput:{
        alignItems: 'center',
    },
    viewInput:{
        alignItems: 'center',
    }
});

export default InputScreen;

