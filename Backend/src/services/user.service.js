import mongoose from "mongoose";
import User from "../models/User.js";

const createUserService = (body) => User.create(body);

const findAllService = () => User.find();

const findById = (id) => User.findById(id);

export default {
    createUserService,
    findAllService,
    findById
}