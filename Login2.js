import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './src/Login'

export default function Login2() {
  return (
    <div>
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
        </Routes>
 
    </div>
  )
}
