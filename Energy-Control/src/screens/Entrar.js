import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from '../style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input.js';
import { useContext, useState } from 'react';
import {AuthContext} from '../contexts/auth.js'

const Entrar=()=>{
  const {entrar} = useContext(AuthContext)
  let url = "https://c5f2-2804-d4b-4200-9600-cdc7-2eb0-df00-5d9f.ngrok-free.app/auth"
  const navigation = useNavigation();
  let[name, setName] = useState('')
  let[username, setUsername] = useState('')
  let[email, setEmail] = useState('')
  let[password, setPassword] = useState('')
  
  return(
    <View style={styles.greencontainer}>
      <View style = {styles.safeArea}>    

        <Input 
          placeholder="Email"
          value = {email}
          onChangeText ={setEmail}
          autocorrect ={false}
          autoCapitalize = "none" 
        />
        <Input 
          secureTextEntry 
          placeholder="Senha"
          value = {password}
          onChangeText ={setPassword}
          autocorrect ={false}
          autoCapitalize = "none" 
        />
        <TouchableOpacity style ={styles.whiteButton} onPress={()=> entrar(email, password)}>
          <Text style={styles.buttonText}>
            entrar
          </Text>
        </TouchableOpacity>
      </View>  
      <StatusBar style="auto"/>
    </View>
  );
}
export default Entrar;
