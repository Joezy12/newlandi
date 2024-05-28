import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './homepageComponents/homepage'
import './home.css'
import './about.css'
import Toplabel from './homepageComponents/toplabel'
import Navbar from './general/navbar'
import PhoneNav from './general/phoneNav'
import About from './aboutCommponent/about'
import Footer from './general/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section className='app'>
    <Toplabel />
    <PhoneNav />
    <Navbar />
      <Routes> 
        <Route index element={<Homepage />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
   </section>
  )
}

export default App
