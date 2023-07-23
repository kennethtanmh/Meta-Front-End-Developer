import React, { Component } from 'react'
import logo from '../img/Logo.svg'

export class Header extends Component {
  render() {
    return (
        <header>
        <img src={logo} alt="Little Lemon Logo" />
      </header>
    )
  }
}
export default Header