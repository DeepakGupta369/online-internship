import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={navStyle}>Home</Link>
      <Link to="/about" style={navStyle}>About</Link>
      <Link to="/projects" style={navStyle}>Projects</Link>
      <Link to="/skills" style={navStyle}>Skills</Link>
      <Link to="/contact" style={navStyle}>Contact</Link>
    </nav>
  );
}

const navStyle={
  color: 'white',
  marginRight: '15px',
  textDecoration: 'none'
};

export default Navbar;