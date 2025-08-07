import React, { useState, useSyncExternalStore } from 'react'
import axios from "axios"
import {useNavigate} from "react-router"

const Signup = () => {
  const [email, setemail] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const onsubmit = async () => {
    const test = await axios.post("http://localhost:8080/user/signup", {
      "email": email,
      "username": username,
      "password": password
    })
    console.log(test.data);
    if (test.data == "Signed Up") {
      localStorage.setItem("email",email)
      navigate("/login")
    }else(
      alert("Signed Up Failed")
    )
    
  }
  return (
    <div>
      <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} />
      <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)} />
      <input type="text" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
      <button onClick={onsubmit}>signup </button>

    </div>
  )
}

export default Signup
