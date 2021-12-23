import { useContext, createContext, useState, useEffect } from 'react'


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    // const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            userName: "Jeffrey",
            trelloName: "jeffc138",
        })
    }, [])

    const value = {
        userData,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
