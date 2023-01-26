import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Email from '../Email/Email'
const Landing = () => {
  return (
    <div id="home">
      <NavBar></NavBar>
      <section className='text-red bg-zinc-800'>
        
      </section>
      <About/>
      <Projects/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Landing