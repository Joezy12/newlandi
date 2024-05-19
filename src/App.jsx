import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './homepageComponents/homepage'
import './home.css'
import Toplabel from './homepageComponents/toplabel'
import Navbar from './general/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section className='app'>
    <Toplabel />
    <Navbar />
      <Routes> 
        <Route index element={<Homepage />} />
      </Routes>
   </section>
  )
}

export default App
