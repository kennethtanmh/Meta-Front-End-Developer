import React from 'react'
import logo from '../../img/Logo.svg'
import './styles.css'
import { Link as LinkS } from 'react-scroll';

const links = [
  {
    id: 1,
    link: 'reservation',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'reviews',
  },
  {
    id: 4,
    link: 'about us',
  },
  {
    id:5 ,
    link: 'contact us',
  }
];


const Header = () => {
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS to={link} smooth duration={550} className='links'>
          {link}
        </LinkS>
      </li>
    );
  });

  return (
    <header>
       <nav>
        <ul className='navbar'>
          <li className='navbar-logo'>
            <img src={logo} alt="Little Lemon Logo" />
          </li>
          <div className='navbar-links'>
            {navLinks}
          </div>
        </ul>
    </nav>

    </header>

  )
}

export default Header


