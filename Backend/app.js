const express = require("express")
const dbconnect = require("./config/dbconnect.js")

const app = express()

app.listen(8080, async () => {
    console.log("App Started!")
  await dbconnect()
})

app.get("/",async (req,res) => {
    res.send("WELCOME TO SOCIAL WORLD!")
})