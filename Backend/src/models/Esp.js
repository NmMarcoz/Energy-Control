import mongoose from 'mongoose'

const EspSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  led:{
    type: String,
    required: false,
  },
  rele:{
    type: String,
    required: false,
  },
  consumo:{
    type: Number,
    required: true,
    default: 1,
  }
})

const Esp = mongoose.model("Esp", EspSchema)
export default Esp