import Esp from '../models/Esp.js';

const createEspService = (body) => Esp.create(body);

const findAllService = () => Esp.Find();

const findById = (id) => Esp.findById(id);

const findEspbyUser = (id) => Esp.find({user: id}).sort({_id: id}).populate("user")

const deleteEsp = (id) => Esp.findOneAndDelete({_id: id})

const updateEsp = (id, led, rele, name) =>{
  Esp.findOneAndUpdate(
    {_id: id}
    ,{led, rele, name},
    {rawResult: true})
 }



