import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Skills from './components/Skills/Skills.jsx'
import Exp from './components/Exp/Exp.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import experiences from "./data/experiences.json"
import projects from "./data/projects.json"

function App() {

  return (
    <>
     <Header />
     <Main />
     <Skills/>
      <h2 className="experience__title">Experience</h2>
     {
      experiences.map((exp,index) => (
        <Exp key={index} {...exp} />
      ))
     }
      <h2 className="projects__title">Projects</h2>
     {
      projects.map((project,index) => (
          <Project key={index} {...project} />
      ))
     }
      <Contact />
    </>
  )
}

export default App
