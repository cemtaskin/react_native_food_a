import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import ResultList from '../components/ResultLists';

const SearchScreen = () =>{
    const[term,setTerm] = useState('');
    const[result,setResults] = useState([]);
    const [errorMessage,setErrorMessage]=useState('');


    const filterResultsByPrice = (price) =>{
        //price ₺ || ₺₺ || ₺₺₺
         return result.filter(r=>{
             console.log(r.price);
             return r.price===price;
         });
    };

    const searchApi = async (searchTerm)=>{
            console.log('Search Api called');
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    location:searchTerm,
                    offset:0,
                }
            });
            //console.log(response.data.businesses);
            setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage('Something went wrong');
        }
        
            
    };
    

    //Call searhApi when component is first renderse..
    useEffect(()=>{searchApi('pasta')},[]);
    useEffect(()=>{console.log('Search Term Changed')},[term,result,errorMessage]);

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
            onTermSubmit={()=>searchApi(term)}
                />
            <Text>Search Screen : {term}</Text>
                <Text>{errorMessage}</Text>
                
                <Text>{result.length}</Text>

            <ResultList title="Cost Effective" results={filterResultsByPrice('₺')}/>
            <ResultList title="Bit Pricer" results={filterResultsByPrice('₺₺')}/>
            <ResultList title="Big Spender" results={filterResultsByPrice('₺₺₺')}/>
            <ResultList title="Others" results={filterResultsByPrice(undefined)}/>
            
                


        </View>
    );
}

const styles= StyleSheet.create({
   
});

export default SearchScreen;
