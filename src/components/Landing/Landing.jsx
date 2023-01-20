import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import About from '../About/About'

const Landing = () => {
  return (
    <div id="home">
      <NavBar></NavBar>
      <section className='text-red bg-zinc-800'>
        
      </section>
      <About/>
      
      <Footer/>
    </div>
  )
}

export default Landing