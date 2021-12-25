import { Outlet, useNavigate } from 'react-router'
import { Link } from "react-router-dom"
import { useAuth } from "./Authentication/AuthProvider"
import axios from "axios"


function App() {

  const {userData} = useAuth();
  const navigate = useNavigate();

  const forceSync = async () => {
    axios.put(`http://localhost:3001/api/cards/sync`, 
    {
      userData,
    });
    alert("Force Sync complete!");
    navigate("/", {replace: true});

  }

  const boardSelectRender = () => {
    const boardBlocks = userData.boardArray.map((boardData, index) => {
      return (
        <Link to={`/boards/${boardData.name}/${boardData.id}`} key={`${index}+${boardData.id}`}>
          <div className="inverted uppercase rounded shadow-md hover:border-2 hover:border-primary hover:cursor-pointer w-28 h-20 flex justify-center items-center">
            <span>{boardData.name}</span>
          </div>
        </Link>
      )
    })

    return boardBlocks;
  }

  return (
    <>
      <div className="flex gap-2 pb-2 mb-2 items-center border-b-2 justify-between">
        <div className="text-xl">
          <h1>Welcome back, {userData.userName}!</h1>
        </div>
        <div className="flex gap-2">
          <button className="btn" onClick={()=>console.log(userData)}>log userData</button>
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
          <button className="btn" onClick={()=>forceSync()}>Force Sync</button>
        </div>
      </div>
      <div className="flex gap-2 mb-2 justify-center">
        {boardSelectRender()}
      </div>
    <Outlet />
    </>
  )
}

export default App
