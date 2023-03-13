import React from 'react'
import { FlatList, View, Text } from 'react-native'
import styles from './Meals.style'
import Error from '../../components/error'
import Loading from '../../components/loading'
import useFetch from '../../hooks/UseFetch'
import MealCard from '../../components/MealsCard'
import Config from 'react-native-config'

const Meals = ({ route, navigation }) => {

    
    const { id } = route.params
    console.log(id)

    
    const {data, loading, error} = useFetch(Config.API_URL+"/filter.php?i="+id)


    if(loading) return <Loading />
    if(error) return <Error />

 
    const handleMealSelect = (idMeal) => navigation.navigate('DetailPage',{idMeal})

  
    const renderMeal = ({item}) => <MealCard meals={item} onSelect={() => handleMealSelect(item.idMeal)} />

    return (
        <View style={styles.container} >
            <FlatList 
                data={data.meals}
                keyExtractor={item => item.idMeal}
                renderItem={renderMeal}
               
            
            />
        </View>
    )
}

export default Meals