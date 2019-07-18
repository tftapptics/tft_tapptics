import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import logo from '../../assets/images/header-logo.png';

export default function Header() {
  return (
    <div className="Header">
     <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/items">Items</a>
          <a id="contact" className="menu-item" href="/Champions">Champions</a>
          <a id="contact" className="menu-item" href="/Synergies">Synergies</a>
      </Menu>
      <img src={logo} alt="T.F. Tapptics" />
    </div>
  )
}
