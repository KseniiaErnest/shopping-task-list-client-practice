import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <br></br>
      <NavLink to='/shopping-lists'>Shopping Lists</NavLink>
    </div>
  )
}
