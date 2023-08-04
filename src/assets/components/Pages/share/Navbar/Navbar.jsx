import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
      <li><Link to={'/'} >Speisekarte</Link></li>
      <li><Link to={'/kontakt'} >Kontakt</Link></li>
      <li><Link to={'/oeffnungszeiten'} >Öffnungszeiten</Link></li>
      <li><Link to={'/galerie'} >Galerie</Link></li>
      </nav>
    </div>
  )
}

export default Navbar;
