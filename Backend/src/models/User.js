import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const UserSchema = new mongoose.Schema({ //Schema dos requerimentos para cadastrar um usário
  name: {
    type: String, // Tipo de dado que vai entrar neste campo
    required: true // Se é obrigatório ou não. neste caso, sim
  },
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,  // Faz com que só seja possível cadastrar 1 EMAIL por user
    lowercase: true, // Lowercase ne pai, nao existe email com uppercase hausdhuasd
  },
  password:{
    type: String,
    required: true,
    select: false // Faz com que este dado não apareça quando puxarmos usuários do banco pela api
  }
})

UserSchema.pre("save", async function (next){ //Antes de exportar o schema, realiza a criptografia
    this.password = await bcrypt.hash(this.password, 10); //Cria uma criptografia de HASH com 10 saltos de criptografia
    next();
  }
)

const User = mongoose.model("User", UserSchema) // Define a constante User como o modelo do userschema
export default User // exporta a dita cujo