import React, { useContext, useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:3001/profile", {
            credentials: "include"
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [])

    const handleLogout = () => {
        fetch("http://localhost:3001/logout", {
            credentials: "include",
            method: "POST"
        })

        setUserInfo(null)
    }

    const username = userInfo?.username

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