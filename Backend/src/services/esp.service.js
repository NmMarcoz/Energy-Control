import Esp from '../models/Esp.js';

const createEspService = (body) => Esp.create(body);

const findAllEspService = () => Esp.find().populate('user');

const findEspById = (id) => Esp.findById(id);

const findEspbyUser = (id) => Esp.find({user: id}).sort({_id: id})

const deleteEsp = (id) => Esp.findOneAndDelete({_id: id})

const updateEsp = (id, led, rele, name) =>{
  Esp.findOneAndUpdate(
    {_id: id}
    ,{led, rele, name},
    {rawResult: true})
 }

 export default{
  createEspService,
  findAllEspService,
  findEspById,
  findEspbyUser,
  deleteEsp,
  updateEsp
 }


