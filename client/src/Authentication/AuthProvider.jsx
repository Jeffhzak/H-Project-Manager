import { useContext, createContext, useState, useEffect } from 'react'
import axios from "axios";

const TRELLO_KEY = import.meta.env.VITE_TRELLO_KEY;
const TRELLO_TOKEN = import.meta.env.VITE_TRELLO_TOKEN;

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
        TRELLO_KEY: TRELLO_KEY,
        TRELLO_TOKEN: TRELLO_TOKEN,
    });
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        console.log("authprovider useEffect fired");
        
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
        // console.log(boardArray)
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
