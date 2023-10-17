import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from '../style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input.js';
import { useState } from 'react';

const Cadastro =()=>{
  let url = "https://c5f2-2804-d4b-4200-9600-cdc7-2eb0-df00-5d9f.ngrok-free.app/user"

  const navigation = useNavigation();
  let[name, setName] = useState('')
  let[username, setUsername] = useState('')
  let[email, setEmail] = useState('')
  let[password, setPassword] = useState('')
  let createUser= (name, username, email, password)=>{
    console.log(name, username, email, password)
      try{
        fetch(url, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            name: name,
            username: username,
            email: email,
            password: password,
          }),
        }).then(res =>{
          const statusCode = res.status
          const data = res.json();
          if(Number(statusCode) == 200){
            navigation.navigate('Login')
         }
          return Promise.all([statusCode, data])
        }).then((res, data) => {
            console.log(res, data);
          }
        )
      }catch(err){
        console.log(err)
    }
  }
  return(
    <View style={styles.greencontainer}>
      <View style = {styles.safeArea}>    
        <Input 
          autocorrect ={false}
          value = {name}
          onChangeText ={setName}
          autoCapitalize = "none" 
        />
        <Input 
        //secureTextEntry 
        placeholder="Nome de usuario"
        value = {username}
        onChangeText ={setUsername}
        autocorrect ={false}
        autoCapitalize = "none" 
        />
        <Input 
        //secureTextEntry 
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
        <TouchableOpacity style ={styles.whiteButton} onPress={()=> createUser(name, username, email, password)}>
          <Text style={styles.buttonText}>
            registrar
          </Text>
        </TouchableOpacity>
      </View>  
      <StatusBar style="auto"/>
    </View>
  );
}
export default Cadastro;
