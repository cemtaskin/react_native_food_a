import React  from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';


const ResultList = ({title,results})=>{
    return (<
        View>
            <Text style={styles.title}>Result List : {title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return <ResultDetail result={item}/>
                }}

           ></FlatList>
        </View>
    );
}

const styles= StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default ResultList;
