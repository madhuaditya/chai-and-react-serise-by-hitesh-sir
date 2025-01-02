import React, {useContext, useState} from 'react'
import UserContext from "../context/UserContext";


const Login = () => {
    const {setUser}= useContext(UserContext)
  const [userName , setUserName]   = useState("")
  const [password , setPassword]   = useState("")
    const handleSubmit =(e)=>{
      e.preventDefault()
        setUser({userName, password})
    }
    return (
        <div><h2>Login Portal</h2>
            <input className={'mr-2'} type="text" placeholder={"UserName"}
                   value={userName}
                   onChange={(e) => {
                       setUserName(e.target.value)
                   }}
            />
            <input type="password" placeholder={"Password"}
                   value={password}
                   onChange={(e) => {
                       setPassword(e.target.value)
                   }}
            />

            <button onClick={handleSubmit} > Submit!!</button>
        </div>

    )
}
export default Login
