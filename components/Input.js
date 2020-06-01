import React from 'react';
import {TextInput , StyleSheet} from 'react-native';


const input = props =>{

    return <TextInput {...props} style ={{...styles.input , ...props.style}}/>;
}


const styles = StyleSheet.create ({
 
    input :{
       borderBottomWidth: 1,
       borderBottomColor : 'black',
       height: 30,
       marginVertical:10,
       fontSize :20,

    }

});

export default input;