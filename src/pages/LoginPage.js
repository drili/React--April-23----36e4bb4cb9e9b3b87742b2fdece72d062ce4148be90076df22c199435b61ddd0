import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo } = useContext(UserContext)

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type': "application/json"},
            credentials: "include"
        })

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else {
            alert("Wrong credentials!")
        }
    }

    if (redirect) {
        return <Navigate to={"/"}></Navigate>
    }

    return (
        <div className='auth-form'>
            <form action="" className='login' onSubmit={handleLoginSubmit}>
                <h1>Login</h1>
                
                <input 
                    type="text" 
                    placeholder='username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder='password' 
                    name="" 
                    id="" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage