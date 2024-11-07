
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Homepage from './Homepage'

function App() {
 
  return (
    
    <>

     {/* <Home/> */}
    {/* <Register/> */}
     {/* <Login/> */}

     <NavLink to={'/'}> Home  </NavLink>
     <NavLink to={'register'}> Register  </NavLink>
     <NavLink to={'login'}> Login  </NavLink>

     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='register' element={<Register/>}></Route>
         <Route path='login' element={<Login/>}></Route>
         <Route path='Homepage' element={<Homepage/>}></Route>
         
     </Routes>
    </>
    
  )
}

export default App
