import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style.js';
import Input from '../components/Input.js';
import {AuthContext} from '../contexts/auth.js'
import { useContext } from 'react';


const Login =()=>{
  const {user} = useContext(AuthContext)
  const navigation = useNavigation(); 
  return( 
    //Safe area
    <View> 
        <View style={styles.greenHeader}>
            <View style={styles.greenHeaderContainer}>
              <View> 
                <Text style={styles.textHeaderWhite}> 
                    Bem
                </Text>
                <Text style={styles.textHeaderWhite}>
                  vindo.
                </Text>
                <Text style={styles.subTextHeaderWhite}>
                  {user.user}
                </Text>
              </View>
        </View>
      </View>
      <View style={styles.midContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonWhiteText}>
            meus dispositivos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonWhiteText}>
            cadastrar dispositivo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.smallButtonWhiteText}>
            deslogar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
   </View>
  );
}
export default Login;
