import React from 'react'
import './styles.css'
import SpecialCard from '../SpecialCard/SpecialCard'

const Specials = () => {
  return (
    <section className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>This weeks specials!</h1>
        <button className='menu'>Online Menu</button>
      </div>
      <SpecialCard />
    </section>
  )
}

export default Specials