import mongoose from "mongoose";
import userService from "../services/user.service.js";
import jwt  from "jsonwebtoken";

export const validId = (req, res, next) =>{
  try{
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
      return res.status(401).send({message: "insira um ID válido"})
    }
    req.userId = id
    return next();
  }catch(erro){
    return res.status(500).send({message: erro.message})
  }
}

export const validUser = async (req, res, next) =>{
  try{
    const id = req.params.id
    const user = await userService.findById(req.params.id)
    if(!user){
      return res.status(401).send({message: "Não existem usuários com este ID"})
    }
    req.userId = id
    req.user = user
    return next();
  }catch(erro){
    return res.status(500).send({message: erro.message})
  }
}

export const isAuth = async (req, res, next) =>{
  try{
    const { authorization } = req.headers
    const parts = authorization.split(' ');
    const[bearer, token] = parts
    if(!authorization){
      return res.send(401);    }
    if(bearer !== "Bearer"){
      return res.status(400).send({message: "Sem autorização."})
    }
   jwt.verify(token, process.env.JWT_SECRET, async(erro, decoder) =>{
    if(erro){
      return res.status(401).send({message: "Token inválido"})
    }
    console.log(decoder)
    const user = await userService.findById(decoder.id)
    if(!user || !user.id){
      return res.status(401).send({message: "Invalid Token"})
    }
    req.userId = user.id
    return next();
   })
  }catch(erro){
    return res.status(500).send({message: erro.message})
  }


}

