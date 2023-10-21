import espService from "../services/esp.service.js"
import userService from "../services/user.service.js"
import userController from "./user.controller.js"

const findAllEsp = async(req, res) =>{
 try{ const esps = await espService.findAllEspService()
  if(esps.length === 0){
    return res.status(400).send({Message: "Não tem ESP'S cadastrados"})
  }
  return res.status(200).send(esps)}catch(err){
    return(
      res.status(400).send({message: err.message}),
      console.warn(err.message)
    )
  }
}

 const createEsp = async(req,res) =>{
 try{ const {name, led, rele} = req.body
 let user = req.userId
  if( !name){
    return(
    res.status(401).send("Campos: name - são obrigatórios"),
    console.warn("Campos: name - são obrigatórios")
    )
  }
  user =  await userService.findById(user)
  console.warn(user)
  const esp = await espService.createEspService({
    name,
    user: user,
    led,
    rele
  })
  if (!esp){
    return (
      res.status(400).send("Erro criando o usuário"),
      console.warn("Erro criando o usuário")
    )
  }
  console.warn("Esp cadastrado!")
  return res.status(200).send({
    message:"Esp cadastrado!",
    esp:{
      id: esp._id,
      name: name,
      user: esp.user,
      led: led,
      rele: rele
    }
  
  })}catch(err){
    return(
    res.status(400).send({message: err.message}),
    console.warn(err.message)
    )
  }

}


export default{
  createEsp,
   findAllEsp
}