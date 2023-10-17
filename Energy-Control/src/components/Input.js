import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Input =(props) =>{
  const[sec, setSec] = useState(props.secureTextEntry)
  return(
    <View style={styles.container}>
      <TextInput style ={styles.input} 
      underlineColorAndroid="transparent" 
      placeholder='Nome' 
      placeholderTextColor="#4DCE4B"
      {...props}

      />
      <TouchableOpacity style = {styles.mostrarBotao}>    
        <Text style={styles.mostrarSenha}>
          Mostrar Senha
        </Text>

         
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginTop: 20,
  },
  mostrarBotao:{
    position:'absolute',
    right:30,
    justifyContent:'center'
  },
  mostrarSenha:{
    fontSize:10,
    color:'#000'
  },
  input:{
    height:59,
    flex:1,
    backgroundColor:'#fff',
    paddingLeft:40,
    borderRadius:18,
    marginHorizontal:52,
    fontSize: 14,
  },
})

export default Input;