import React from 'react'
import User from './PropsEx/User'
import './assets/css/rajni.css'
import Message from './stateEx/Message'
import Navbar from './Navbar/Navbar'
import Counter from './stateEx/Counter'
import Product from './stateEx/Product'
const App = () => {
  return (
    <div>
      <Navbar />
      {/*   <h1>App component</h1> */}
      <hr />
      <Product />
    </div>
  )
}

export default App
