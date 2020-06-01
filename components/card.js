import React from "react";
import {View , StyleSheet} from "react-native";

const card = props => {
return (
<View style ={{...styles.card , ...props.style}}>{props.children}</View>
);
};


const styles = StyleSheet.create ({

    card:{
    padding: 20,
     borderColor: "#ccc",
     borderWidth : 1,
     borderRadius: 10 ,
     margin : 20 ,
     shadowColor: 'black',
     shadowOffset: {width :0 , height :2},
     shadowRadius: 6,
     shadowOpacity: 0.3,
     elevation: 8,
     backgroundColor: 'white',
    }
});

export default card;