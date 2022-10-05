import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.about01} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => ( 
          <li key={`link-`}
        ))}
      </ul>
    </nav>
  )
}

export default Navbar