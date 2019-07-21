import React, { Component } from 'react'
import {slide as Menu} from 'react-burger-menu';


class Nav extends Component {  constructor (props) {
  super(props)
  this.state = {
    menuOpen: false
  }
}

handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})  
}

closeMenu () {
  this.setState({menuOpen: false})
}

toggleMenu () {
  this.setState(state => ({menuOpen: !state.menuOpen}))
}

showSettings (event) {
  event.preventDefault();
}


  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    )
  }
}

export default Menu;