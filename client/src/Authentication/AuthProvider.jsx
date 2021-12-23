import { useContext, createContext, useState, useEffect } from 'react'
import axios from "axios";


const AuthContext = createContext();

const URL = "https://api.trello.com/1";

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    // const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState({
        userName: "Jeffrey",
        trelloName: "jeffc138",
        TRELLO_KEY: "2d262451a1b152794b56e66f933be1c5",
        TRELLO_TOKEN: "91f75e3d2c52871cc66c3492755edf56a7fec4a15a9651f1e813f9f127553d1b",
    });
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        // console.log(`${URL}/members/${userData.trelloName}/boards?key=${userData.TRELLO_KEY}&token=${userData.TRELLO_TOKEN}`)
        const res = await axios.get(`${URL}/members/${userData.trelloName}/boards?key=${userData.TRELLO_KEY}&token=${userData.TRELLO_TOKEN}`);
        
        const boardData = res.data;
        const boardArray = [];
        
        boardData.forEach(board => {
            boardArray.push({
                name: board.name,
                desc: board.desc,
                shortLink: board.shortLink,
                id: board.id,
                url: board.url,
            })
        });
        
        const newUserData = {...userData, boardArray};
        setUserData(newUserData);
        
        setLoading(false);
    }, [])

    const value = {
        userData,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : null}
        </AuthContext.Provider>
    )
}
