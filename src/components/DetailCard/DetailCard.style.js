import { StyleSheet ,Dimensions} from "react-native";
export default StyleSheet.create({
    container:{backgroundColor:"#eceff1",flex:1},
    title:{fontSize:30,color:"#C62828",fontWeight:"bold",margin:5},
    image:{width:Dimensions.get('window').width,height:300},
    area:{fontSize:20,marginLeft:5,color:"#C62828",fontStyle:"italic",paddingBottom:5},
    line:{borderWidth:1,borderColor:'#bcbcbc',},
    text:{fontSize:18},
    innercontainer:{padding:5,margin:5,flex:1},
    youtube:{backgroundColor:"red",margin:15,borderRadius:7,alignItems:"center"},
    youtubetext:{fontSize:20,color:"white",padding:10,fontWeight:"bold"}

})