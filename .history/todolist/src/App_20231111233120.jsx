import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <Home />
    </>
  )
}

export default App
