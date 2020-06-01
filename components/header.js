import React from 'react';
import {View , StyleSheet , Text } from 'react-native';

const header = props => {

    return (
        <View style = {styles.header}>
            <Text style ={styles.headerText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header :{
      backgroundColor :'#f7287b',
      padding: 10,
      width: '100%',
      alignItems:'center',
      justifyContent:'center',
      height:90,

    },
    headerText:{
        color:'black',
        fontSize:20,
    }
});

export default header;