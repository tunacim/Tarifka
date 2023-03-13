import React from "react";
import {View,Text,Image, TouchableOpacity, Linking} from "react-native";
import styles from "./DetailCard.style"
const   DetailCard=({detail})=>{
    return(
       
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:detail.strMealThumb}}></Image>
            <View style={styles.innercontainer}>
            <Text style={styles.title}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>{detail.strInstructions}</Text>
            </View>
            <TouchableOpacity style={styles.youtube} onPress={()=>{Linking.openURL(detail.strYoutube)}}
            ><Text style={styles.youtubetext}>Watch On Youtube</Text></TouchableOpacity>
        </View>
        
    )
}
export default DetailCard