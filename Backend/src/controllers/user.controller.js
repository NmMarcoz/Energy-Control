import userService from "../services/user.service.js"

const create = async (req,res) =>{
    try{
        const {name, username, password, email} = req.body
        if(!name || !username || !password || !email){
            return( 
            res.status(401).send({message: "Todos os campos são obrigatórios"}),
            console.log("campo vazio")
            )
        }
        const user = await userService.createUserService(req.body);
        if(!user){
            res.status(400).send({message: "erro criando o usuário"})
        }
        console.log("Usuário Criado!")
        res.status(200).send({
            message: "usuário criado com sucesso",
            user:{
               id: user._id,
               name,
               username,
               email
            }
        })

    }catch(erro){
        console.log("erro")
        res.status(500).send({message: erro.message})
    }
}

const findAll = async (req, res) =>{
    try{
        const users = await userService.findAllService();
        if(users.length === 0){
            return res.status(400).send({message: "Não tem usuários cadastrados"})
        }
        return res.status(200).send(users)
    }catch(erro){
        return res.status(500).send({message: erro.message})
    }
}

const findById = async (req, res) =>{
    try{
        const user = req.user
        if(!user){
            return res.status(401).send({message: "Não existem usuários com este ID"})
        }
        return res.status(200).send({user})
    }catch(erro){
       return res.status(500).send({message: erro.message})
    }
}

const findByIdAlternative = async (req, res) =>{
    try{
        const {id} = req.body
        const user = await userService.findById(id)
        if(!user){
            return res.status(401).send({message: "Não existem usuários com este ID"})
        }
        return res.status(200).send({user})
    }catch(erro){
       return res.status(500).send({message: erro.message})
    }
}



export default {
    create,
    findAll,
    findById,
    findByIdAlternative
}