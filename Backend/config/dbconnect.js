const mongoose = require("mongoose")
const dbconnect = async () => {
    await mongoose.connect("mongodb+srv://Yash-Parekh-1103:Yash1103@yash1103.nwbrygb.mongodb.net/Social?retryWrites=true&w=majority&appName=Yash1103")
    console.log("DB connected Successfully");
    
}

module.exports = dbconnect