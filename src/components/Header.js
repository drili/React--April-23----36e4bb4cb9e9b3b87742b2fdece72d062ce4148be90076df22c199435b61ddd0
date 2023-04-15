import React, { useContext, useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/profile", {
                    method: "GET",
                    headers: {'Content-Type': "application/json"},
                    credentials: "include"
                })

                // if(!response.ok) {
                //     throw new Error("Network response was not ok")
                // }
                
                if (response.ok) {
                    const userInfo = await response.json()
                    setUserInfo(userInfo)
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        fetchData()
    }, [])

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3001/logout", {
                method: "POST",
                headers: {'Content-Type': "application/json"},
                credentials: "include",
            })

            setUserInfo(null);
        } catch (error) {
            console.error("Error logging out:", error);
        }
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