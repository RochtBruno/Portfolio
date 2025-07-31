import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Skills from './components/Skills/Skills.jsx'
import Exp from './components/Exp/Exp.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {

  return (
    <>
     <Header />
     <Main />
     <Skills/>
      <h2 className="experience__title">Experience</h2>
     <Exp />
     <Exp />
      <h2 className="projects__title">Projects</h2>
      <Project />
      <Contact />
    </>
  )
}

export default App
