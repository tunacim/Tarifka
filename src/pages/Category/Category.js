import axios, { Axios } from "axios";
import React,{useState,useEffect} from "react";
import { Text,SafeAreaView ,FlatList} from "react-native";
import Config from "react-native-config";
import CategoryCard from "../../components/CategoryCard"
import styles from "./category.style"

function Category(){
    
    

    const[data,setData]=useState();

    useEffect(()=>{ fetchData()},[]);

    
    
    const fetchData= async ()=> {
        try {
            const {data:CategoryData}= await axios.get(Config.API_URL)
            setData(CategoryData.categories)
           
            
            
        } catch (error) {
            console.log(error)
        }
      
    }
    const renderCategory=({item}) => <CategoryCard category={item}></CategoryCard>
    
    return(

        <SafeAreaView style={styles.container}>
            
           <FlatList data={data} renderItem={renderCategory}></FlatList>
        </SafeAreaView>
    )
}
export default Category