import { Outlet } from 'react-router'
import { useAuth } from "./Authentication/AuthProvider"
import { useEffect } from "react"
import axios from "axios"


function App() {

  const {userData} = useAuth();

  useEffect(()=> {
    // axios.get()
  },[])

  const forceSync = async () => {
    axios.put(`http://localhost:3001/api/cards/sync`, 
    {
      userData,
    });
  }

  return (
    <>
    <h1>Welcome back, {userData.userName}!</h1>
    <button onClick={()=>console.log(userData)}>test</button>
    <button onClick={()=>forceSync()}>Force Sync</button>
    <Outlet />
    </>
  )
}

export default App
