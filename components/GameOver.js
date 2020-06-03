import React from 'react';
import {View, Text ,StyleSheet, Button} from 'react-native';

const Gameover = props =>{


    return(
        <View style ={styles.screen}>
            <Text>The Game is over</Text>
    <Text>No of Rounds :{props.rounds}</Text>
            <Text>Number was :{props.userNumber} </Text>
            <Button title ="New Game" onPress={props.OnGameRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
});


export default Gameover;