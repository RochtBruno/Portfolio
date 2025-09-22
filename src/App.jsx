import React, { useMemo } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Skills from './components/Skills/Skills.jsx'
import Exp from './components/Exp/Exp.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
// Dados em português (default)
import experiencesPT from "./data/experiences.json";
import projectsPT from "./data/projects.json";
// Dados traduzidos
import experiencesEN from "./data/experiences.en.json";
import experiencesFR from "./data/experiences.fr.json";
import projectsEN from "./data/projects.en.json";
import projectsFR from "./data/projects.fr.json";
import { useTranslation } from 'react-i18next'
import './i18n.js'

function App() {

  const { t, i18n } = useTranslation();

  const changelanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Seleciona datasets conforme idioma
  const { experiences, projects } = useMemo(() => {
    switch (i18n.language) {
      case 'en':
        return { experiences: experiencesEN, projects: projectsEN };
      case 'fr':
        return { experiences: experiencesFR, projects: projectsFR };
      default:
        return { experiences: experiencesPT, projects: projectsPT };
    }
  }, [i18n.language]);

  return (
    <>
    <div style={{display:'flex', gap:'8px', position:'fixed', top:10, right:10, zIndex:100}}>
      <button onClick={() => changelanguage('en')}>English</button>
      <button onClick={() => changelanguage('pt')}>Português</button>
      <button onClick={() => changelanguage('fr')}>Français</button>
    </div>
     <Header />
     <Main />
     <Skills/>
      <h2 className="experience__title">{t('experience.title', 'Experience')}</h2>
     {
      experiences.map((exp,index) => (
        <Exp key={index} {...exp} />
      ))
     }
      <h2 className="projects__title">{t('projects.title', 'Projects')}</h2>
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
