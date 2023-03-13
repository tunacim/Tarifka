import React from "react";
import {NavigationContainer}from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Category from "./pages/Category";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";
function Router(){
  const Stack=createNativeStackNavigator()
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Category} options={{
        headerStyle:{backgroundColor:"orange"},
        headerTitleStyle:{color:"white"}
      }}></Stack.Screen>
      <Stack.Screen name="Meals" component={Meals} options={{
        headerStyle:{backgroundColor:"orange"},
        headerTitleStyle:{color:"white"},
        headerTintColor:"white"
      }}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail} options={{
        headerStyle:{backgroundColor:"orange"},
        headerTitleStyle:{color:"white"},
        headerTintColor:"white"
      }}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default Router