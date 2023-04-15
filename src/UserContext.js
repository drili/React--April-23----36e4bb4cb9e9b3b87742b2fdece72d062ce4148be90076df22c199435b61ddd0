import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <div>{children}</div>
        </UserContext.Provider>
    )
}

export default UserContextProvider