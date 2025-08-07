const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
})

const Usermodel = mongoose.model("user",UserSchema)

module.exports= Usermodel