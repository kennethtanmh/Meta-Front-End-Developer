import React from 'react'
import './styles.css'
import SpecialCard from '../SpecialCard/SpecialCard'

const Specials = () => {
  return (
    <section className='specials'>
      <div className='specials-header'>
        <button className='menu'>Online Menu</button>
      </div>
      <SpecialCard />
    </section>
  )
}

export default Specials