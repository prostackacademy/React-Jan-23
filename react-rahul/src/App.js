import React from 'react'
import Message from './components/Message'
import Navbar from './Navbar/Navbar'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <Navbar />
      <Message />
      <hr />
      <Counter />
    </div>
  )
}

export default App
