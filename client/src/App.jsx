import { Routes,Route,Navigate } from 'react-router-dom'


import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Home from './pages/Home'

import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const[user,setUser]=useState(null)

  const getUser=async()=>{
    try {
      const url=`${process.env.REACT_APP_API_URL}/auth/login/success`;
      const{data}=await axios.get(url,{withCredentials:true});

      
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(()=>{
    getUser();
  },[])

   return (
    <div className='container'>
      <Routes>
        <Route
          exact
          path="/"
          element={user ?<Home user={user}/>:<Navigate to="/Login"/>}
/>

<Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> :  <Login/>}
/>

<Route
          exact
          path="/signup"
          element={user ? <Navigate to="/" /> :  <Signup/>}
/>
       
       
       
        
      </Routes>
     

    
       
    </div>
  )
}

export default App
