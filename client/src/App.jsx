import { Outlet } from 'react-router'
import { useAuth } from "./Authentication/AuthProvider"

function App() {

  const {userData} = useAuth();

  return (
    <>
    <h1>Welcome back, {userData.userName}!</h1>
    <Outlet />
    </>
  )
}

export default App
