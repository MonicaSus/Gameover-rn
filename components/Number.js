import React from 'react';
import {View , StyleSheet , Text } from 'react-native';
import Color  from './color';
const Number = props => {

    return (
        <View style = {styles.container}>
            <Text style ={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
      borderColor :Color.primary,
      borderWidth : 2,
      padding: 10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
      padding: 10,
      marginVertical : 10,
    },
    number:{
        color:Color.primary,
        fontSize:20,
    }
});

export default Number;