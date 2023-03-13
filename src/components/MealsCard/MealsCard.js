import React from "react";
import {View,Text,Image,TouchableWithoutFeedback} from "react-native";
import styles from "./MealsCard.style"
const MealsCard=({meals,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:meals.strMealThumb}}></Image>
            <View style={styles.innercontainer}>
            <Text style={styles.title}>{meals.strMeal}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default MealsCard