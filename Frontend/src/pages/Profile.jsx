import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



const Profile = () => {
    const [profile, setprofile] = useState(null)
    useEffect(() => {
    getprofile()
    }, [])
    
   const getprofile = async () => {
        const email = localStorage.getItem("email")
        const userprofile = await axios.post("http://localhost:8080/user/profile",{
            "email":email
        })
        // console.log(userprofile.data.profile);
        setprofile(userprofile.data.profile)
        

    }
  return (
    <div>
      {/* <button onClick={getprofile}> Click</button> */}
      {profile && <>
      <p>{profile.email}</p>
      <p>{profile.username}</p>
      <p>{profile.password}</p>
      </>}
    </div>
  )
}

export default Profile
