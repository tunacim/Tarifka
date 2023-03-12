
import React from "react";
import { Text,SafeAreaView ,FlatList,ActivityIndicator} from "react-native";
import Config from "react-native-config";
import CategoryCard from "../../components/CategoryCard"
import UseFetch from "../../hooks/UseFetch";
import styles from "./category.style"
import Loading from "../../components/loading/Loading";
import Error from "../../components/error";

function Category(){
    
    const {loading,data,error}=UseFetch(Config.API_URL)
    
    const renderCategory=({item}) => <CategoryCard category={item}></CategoryCard>
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        return <Error></Error>}
    return(

        <SafeAreaView style={styles.container}>
            
           <FlatList data={data} renderItem={renderCategory}></FlatList>
        </SafeAreaView>
    )
}
export default Category