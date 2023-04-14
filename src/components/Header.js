import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

const Header = () => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/profile", {
            credentials: "include"
        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username)
            })
        })
    }, [])

    const handleLogout = () => {
        fetch("http://localhost:3001/logout", {
            credentials: "include",
            method: "POST"
        })

        setUsername("")
    }

    return (
        <header>
            <Link className='logo' to="/">Blog</Link>
            
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <a onClick={handleLogout}>Logout</a>
                    </>
                )}
                
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header