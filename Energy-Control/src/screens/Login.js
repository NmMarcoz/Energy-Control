import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style.js';
import Input from '../components/Input.js';


const Login =()=>{
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style ={styles.textheader}>
          Energy
        </Text>
        <Text style ={styles.textheader}>
          Control
        </Text>
      </View>
      <View style={styles.roundedBackgroundBottom}>
        <TouchableOpacity style={styles.whiteButton} onPress={()=> navigation.navigate('Entrar')} >
          <Text style={styles.buttonText}>
            entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>
            registrar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}
export default Login;
