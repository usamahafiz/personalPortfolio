import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Progress from '../sections/Progress'
import Experience from '../sections/Experience'
import Feedback from '../sections/Feedback'
import Project from '../sections/Project'
import ContactIntro from '../sections/ContactIntro'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div className='home-page'>
        <Hero />
        <About />
        <Progress />
        <Project />
        <Feedback />
        <Experience />
        <ContactIntro />
        <Contact />

      
    </div>
  )
}

export default Home
