import React, { Component } from 'react'
import logo from '../../img/Logo.svg'
import './styles.css'

export class Header extends Component {
  render() {
    return (
      <header>
      <ul className='navbar'>
        <li className='logo'>
          <img src={logo} alt="Little Lemon Logo" />
        </li>
        <li><a href="/">Home</a></li>
        <li><a href='/About'>About</a></li>
        <li><a href='/Menu'>Menu</a></li>
        <li><a href='/Reservations'>Reservations</a></li>
        <li><a href='/Order'>Order Online</a></li>
        <li><a href='/Login'>Login</a></li>
      </ul>
    </header>
    )
  }
}
export default Header