import React from "react";
import {NavigationContainer}from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Category from "./pages/Category";

function Router(){
  const Stack=createNativeStackNavigator()
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Category}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default Router