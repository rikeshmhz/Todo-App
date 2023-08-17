import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './page/Todos'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Todos/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes