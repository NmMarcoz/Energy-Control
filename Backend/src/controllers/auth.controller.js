import authService from "../services/auth.service.js";
import userService from "../services/user.service.js";
import jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'

const login = async (req, res) =>{
  try{
    const{email, password} = req.body
    const user = await authService.loginService(email)
    if(!user){
      return( res.status(401).send({message: "email ou senha incorretos"}),
      console.log("Email ou senha incorretos")
      )
    }
    const passwordIsValid = await bcrypt.compare(password, user.password)
    if(!passwordIsValid){
      return( 
        res.status(401).send({message: "email ou senha incorretos"}),
        console.log("Email ou senha incorretos")
        )
    }
    const token = await authService.generateToken(user.id)
    console.log("ok")
    res.status(200).send({
      message: "Login efetuado",
      token: token
  })
  }catch(erro){
    res.status(500).send({message: erro.message})
    console.log(erro)
  }
}

const userByToken = async(req, res)=>{
  const{token} = req.body
  console.log(token)
  try{
    jwt.verify(token, process.env.JWT_SECRET, async(erro, decoder) =>{
      if(erro){
        return( res.status(401).send({message: "Token inválido"}),
        console.log("Token inválido"),
        console.log("Seu token foi:" + token)
       )
      }
      console.log(decoder)
      const user = await userService.findById(decoder.id)
      if(!user || !user.id){
        return res.status(401).send({message: "Invalid Token"})
      }
      res.status(200).send({message: "Usuário encontrado!", user: user})
      console.log("Usuário encontrado", user)
    })  
  }catch(err){
    res.status(200).send({message: err.message})
    console.log(err.message)
  }
  
}

export default{
  login,
  userByToken
}