import mongoose from "mongoose";

const connectDatabase = async () =>{
    console.log("Aguardando a conexão do banco");
    mongoose.connect(
        process.env.MONGOOSE_URL,
        {useNewUrlParser: true, useUnifiedTopology: true}
    ).then( () =>{
        console.log("MongoDB atlas conectado!");
    }).catch((err) =>{
        console.log(err)
    })
}

export default connectDatabase