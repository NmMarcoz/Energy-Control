import { MontserratAlternates_900Black } from "@expo-google-fonts/montserrat-alternates";
import { Poppins_900Black } from "@expo-google-fonts/poppins";
import { View, Text, StyleSheet,SafeAreaView, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  greencontainer:{
    flex: 1,
    //alignItems: 'center',
    flexDirection: 'column',
    backgroundColor:'#4DCE4B'
  },
  midContainer:{
    top:365,
    alignItems:'center'
  },
  header:{
    alignItems: 'center',
    marginRight: 147,
    marginTop: 259,
    marginBottom: 201,
    position:'absolute'
  },
  greenHeader:{
    flex:1,
    backgroundColor: '#4DCE4B',
    height:304,
    width:'100%',
    position:'absolute',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  greenHeaderContainer:{
    left:27,
    top:132
  },
  textheader:{
    color: '#4DCE4B',
    lineHeight: 49,
    fontSize: 42,
    fontFamily: 'Poppins_900Black',
   
  },
  textHeaderWhite:{
    color: '#fff',
    lineHeight: 49,
    fontSize: 42,
    fontFamily: 'Poppins_900Black',
  },
  subTextHeaderWhite:{
    color:'#fff',
    fontFamily:'Poppins_600SemiBold',
    fontSize:20,
  },
  buttonUpText:{
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    right: 65,
    lineHeight:17
  },
  roundedBackgroundBottom:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#4DCE4B',
    width: '100%',
    height: 352,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    top: 448
    //position: 'absolute'
  },
  buttonHolder:{
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
  },
  safeArea:{
    marginTop: 215 ,
    marginHorizontal:10,
    alignItems:'center'
  },
  button:{
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 15,
    backgroundColor: '#4DCE4B',
    borderRadius: 18,
    marginVertical: 18,
    minWidth:220,
    maxWidth:278,
    alignItems:'center',
    marginHorizontal:52
  },
  whiteButton:{
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 18,
    marginVertical: 18,
    minWidth:220,
    maxWidth:278,
    alignItems:'center',
    marginHorizontal:52
  },
  smallButton:{
    paddingVertical:12,
    paddingHorizontal: 15,
    backgroundColor: '#4DCE4B',
    borderRadius: 18,
    marginVertical: 18,
    minWidth:186,
    maxWidth:186,
    alignItems:'center',
    marginHorizontal:52
  },
  buttonText:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color:'#4DCE4B',
  },
  smallButtonWhiteText:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color:'#fff',
  },
  buttonWhiteText:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color:'#fff',
  }
})

export default styles