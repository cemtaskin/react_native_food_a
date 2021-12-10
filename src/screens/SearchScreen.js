import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const SearchScreen = () =>{
    const[term,setTerm] = useState('');
    const[result,setResults] = useState([]);

    const searchApi = async ()=>{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    location:term,
                    offset:0,
                }
            });
            //console.log(response.data.businesses);
            setResults(response.data.businesses);
            
    };
    
    return (
        <View 
        style={
            {
                backgroundColor:'white',
                flex:1
            }
        }>
            <SearchBar term={term} 
            onTermChange={
                        (newTerm)=>{
                            setTerm(newTerm);
                        }
                }
            onTermSubmit={()=>searchApi()}
                />
            <Text>Search Screen : {term}</Text>
               

                <FlatList
                    data={result}
                    renderItem={({item})=>{
                        return <Text style={{padding:10,margin:5}}>{item.name}</Text>
                    }}
                ></FlatList>

        </View>
    );
}

const styles= StyleSheet.create({
   
});

export default SearchScreen;
