import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext();

localStorage.setItem("isMenuOpen", false)

const NavState = () => {
  /* const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  } */
  let [isMenuOpen, toggleMenu] = useState(() =>
  localStorage.getItem('isMenuOpen')
      ? JSON.parse(localStorage.getItem('isMenuOpen'))
      : null)
};



export default NavState;