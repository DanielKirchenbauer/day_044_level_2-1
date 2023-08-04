import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/Pages/share/Navbar/Navbar'
import Speisekarte from './assets/components/Pages/Speisekarte/Speisekarte'
import Kontakt from './assets/components/Pages/Kontakt/Kontakt'
import Oeffnungszeiten from './assets/components/Pages/Oeffnungszeiten/Oeffnungszeiten'
import Galerie from './assets/components/Pages/Galerie/Galerie'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Speisekarte/> } />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/oeffnungszeiten' element={<Oeffnungszeiten/>} />
        <Route path='/galerie' element={<Galerie/>} />
      </Routes>
    </>
  )
}

export default App
