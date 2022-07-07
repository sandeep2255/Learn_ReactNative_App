import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home"
import Male from "./components/Male"
import Female from "./components/Female"
import Puberty from "./components/Puberty"
import Pregnancy from "./components/Pregnancy"
import Abortion from "./components/Abortion";
import Contraception from "./components/Contraception";
import STD from "./components/STD";
import Menu from "./components/Menu";
import Form from "./components/Form";
import LoginScreen from "./components/LoginScreen";

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen name="Male" component={Male}/>
        <Stack.Screen name="Female" component={Female}/>
        <Stack.Screen name="Puberty" component={Puberty}/>
        <Stack.Screen name="Pregnancy" component={Pregnancy}/>
        <Stack.Screen name="Abortion" component={Abortion}/>
        <Stack.Screen name="Contraception" component={Contraception}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="STD" component={STD}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Form" component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default MyStack