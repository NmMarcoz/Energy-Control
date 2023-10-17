import {useFonts, Montserrat_Alternates_900Black, MontserratAlternates_600SemiBold,} from '@expo-google-fonts/montserrat-alternates'
import {Poppins_900Black, Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'
import { createStackNavigator , createAppContainer, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login.js'
import Cadastro from './src/screens/Cadastro.js';
import Homepage from './src/screens/Homepage.js'
import Entrar from './src/screens/Entrar.js';
import styles from './src/style';
import AuthProvider from './src/contexts/auth.js';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{title:'', headerTransparent: true}}name = "Login" component ={Login}/>
      <Stack.Screen options={{title:'', headerTransparent: true}}name = "Entrar" component ={Entrar}/>
      <Stack.Screen options ={{title:'', headerTransparent: true}} name = "Homepage" component ={Homepage}/>
      <Stack.Screen options={{title:'', headerTransparent: true}}name = "Cadastro" component ={Cadastro}/>
    </Stack.Navigator>
  )
}
export default function App(){
  let[fontsLoaded] = useFonts({
    Poppins_900Black, 
    Poppins_400Regular,
    Poppins_600SemiBold
  });
  if(!fontsLoaded){
    return null;
  }else{
    return(
      <NavigationContainer>
        <AuthProvider> 
          <MyStack />
        </AuthProvider>
      </NavigationContainer>
    )
};
}

