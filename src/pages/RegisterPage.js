import React, { useState } from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type': "application/json"}
        })

        if (response.status === 200) {
            alert("Registration was successful!")
        } else {
            alert("Registration failed! Try again later")
        }
    }

    return (
        <div className='auth-form' onSubmit={handleRegisterSubmit}>
            <form action="" className='register'>
                <h1>Register</h1>
                
                <input 
                    type="text" 
                    placeholder='username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='password'
                    name="" 
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage