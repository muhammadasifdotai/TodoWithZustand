import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import useAuthStore from "../app/authStore";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    // const userData = false
    const {userData} = useAuthStore(state => state)
    console.log('userData AppNavigation', userData)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userData ? (
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>):
        (
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;