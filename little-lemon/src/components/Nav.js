import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <ul>
        <li><a href="/"></a>Home</li>
        <li><a href='/About'>About</a></li>
        <li><a href='/Menu'>Menu</a></li>
        <li><a href='/Reservations'>Reservations</a></li>
        <li><a href='/Order'>Order Online</a></li>
        <li><a href='/Login'>Login</a></li>
      </ul>
    )
  }
}

export default Nav