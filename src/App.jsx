import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Overview from './Components/Overview'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Mininavbar from './Components/Mininavbar'
import Contact from './Components/Contact'

const App = () => {

  return (
    <div className='#0d1117'>
      <Mininavbar/>
      <Navbar/>
      <Overview/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
