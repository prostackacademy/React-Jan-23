import React from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'
import Login from './FormHandling/Login'
import User from './AxiosEx/User'
const App = () => {
  return (
    <div>
      <Navbar />
      <User />
    </div>
  )
}

export default App
