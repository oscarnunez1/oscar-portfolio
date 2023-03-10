import * as React from 'react'
import { CssBaseline } from '@mui/material'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import ProjectDetails from './pages/ProjectDetails'
import { Box } from '@mui/material'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Box sx={{ marginTop: '80px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:projectDetails' element={<ProjectDetails />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  )
}

export default App;
