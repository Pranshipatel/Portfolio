import React from 'react'
import { Routes, Route } from "react-router-dom";
import Final from './Final'
import SkillSection from './components/Skills';
import ContactPage from './components/Contact';
import Experience from './components/Experience';
import ProjectSection from './components/Project';

const AppRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Final/>} />
          <Route path='/skill' element={<SkillSection/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<ProjectSection/>} />
      </Routes>
  )
}

export default AppRoutes
