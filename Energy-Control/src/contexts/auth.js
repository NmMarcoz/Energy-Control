import React, {createContext, useState} from "react";
import { useNavigation } from '@react-navigation/native';



export const AuthContext = createContext({})
let token


function AuthProvider ({children}){
    let url = "https://25d6-2804-d4b-4200-9600-84e7-6bfb-5103-ddc4.ngrok-free.app/auth"
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    function userByToken(token, email){
      fetch("https://25d6-2804-d4b-4200-9600-84e7-6bfb-5103-ddc4.ngrok-free.app/auth/token",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
          token: token
        }),
      }).then(res=>{
        const statusCode = res.status
        const data = res.json();
        return Promise.all([statusCode, data])
      }).then((res, data)=>{
        console.log(res, data)
        const username = res[1].user.username
        setUser({
          email:email,
          user: username
        })
      })
    }
    function entrar(email, password){
      console.log(typeof(password))
      try{
        fetch(url, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email: email,
            password: password
          }),
          }).then(res =>{
            console.log(email, password)
            const statusCode = res.status
            const data = res.json();
            if(Number(statusCode) == 200){
              navigation.navigate('Homepage')
           }
            return Promise.all([statusCode, data])
          }).then((res) => {
            //console.log(res);
            token = res[1].token
            console.log("token é:" +token)
            console.log(typeof(res))
            userByToken(token, email)
          })
          }catch(err){
            console.log(err)
          }
        }
       
      return(
        <AuthContext.Provider value={{nome:"Fulano", entrar, userByToken, user}}>
          {children}
        </AuthContext.Provider>
      )
    }

export default AuthProvider