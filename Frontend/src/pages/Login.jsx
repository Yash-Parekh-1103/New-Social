import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router'

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const onsubmit = async () => {
  const test = await axios.post("http://localhost:8080/user/login",
    {
      "email":email,
      "password":password
    }
  )
console.log(test);

  console.log(test.data);
  if (test.data == "Logined") {
      localStorage.setItem("email",email)
      navigate("/")
    }else if(test.data == "Email not found"){

      alert("No User Found! Please Sign Up")
    }else{
      alert("Password Wrong!")
    }
    
    
  }
  return (
    <div>
      <input type="text"placeholder='email'onChange={(e) => setemail( e.target.value)} />
      <input type="text"placeholder='password'onChange={(e) => setPassword( e.target.value)} />
      <button onClick={onsubmit}>Logined</button>
    </div>
  )
}

export default Login
