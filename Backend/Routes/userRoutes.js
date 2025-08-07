const express = require("express")
const User = require("../Model/usermodel.js")

const router = express.Router()

router.post("/login",async (req,res) => {
    const {email,password} = req.body
    console.log(email,password);
    
    const user = await User.find({
        "email":email
        
    })
    console.log(user);
    
    if(user.length == 0){
        res.send("Email not found")
    }
    
    
    if(user[0].password==password){
        res.send("Logined")
        
    }
    else{
        res.send("Invalid Pass")
    }
    
})
router.post("/signup",async (req,res) => {
    const {email,username,password} = req.body
    const newuser = new User({
        "email":email,
        "username":username,
        "password":password
    })
    await newuser.save()
    res.send("Signed Up")
})

router.post("/profile",async (req,res) => {
    const{email} = req.body
    const profile = await User.find({
        "email":email
    })
    res.json({
        "profile":profile[0]
    })
})




module.exports = router