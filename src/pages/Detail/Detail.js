//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
import React from "react";
import { FlatList,View} from "react-native";
import Config from "react-native-config";
import DetailCard from "../../components/DetailCard";
import Error from '../../components/error'
import Loading from '../../components/loading'
import UseFetch from "../../hooks/UseFetch";

const Detail=({route})=>{

    const { idMeal} = route.params

    

    const {data,loading,error}=UseFetch(Config.API_URL+"lookup.php?i="+idMeal)

   
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        return <error></error>
    }
    
    const renderDetail=({item})=><DetailCard detail={item} ></DetailCard>
    return(

       <FlatList  renderItem={renderDetail} keyExtractor={item => item.idMeal} data={data.meals}></FlatList>
    )
}
export default Detail