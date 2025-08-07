const express = require("express")
const dbconnect = require("./config/dbconnect.js")
const UserRouter = require("./Routes/userRoutes.js")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.listen(8080, async () => {
    console.log("App Started!")
  await dbconnect()
})

app.get("/",async (req,res) => {
    res.send("WELCOME TO SOCIAL WORLD!")
})

app.use("/user",UserRouter)