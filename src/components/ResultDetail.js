import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';



const ResultDetail = ({result}) =>{

    return <View style={styles.container}>
        <Text style={styles.name}>{result.name}</Text>
        <Image  style={styles.image} 
        source={{uri: result.image_url==undefined?'':result.image_url}} />
    </View>
};

const styles= StyleSheet.create({

    image:{
        width:250,
        height:120,
        borderRadius:4
    },
    name:{
        fontWeight:'bold'
    },
    container:{
        marginBottom:10,
        marginLeft:5,
    }

});

export default ResultDetail;
