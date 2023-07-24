import React from 'react'
import './styles.css'
import TestimonialCard from  '../TestimonialCard/TestimonialCard'

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials-header'>
        <h1 className='testimonials-title'>Elevating Culinary Experiences: Hear from Our Cherished Guests!"</h1>
      </div>
      <TestimonialCard />
    </section>
  )
}

export default Testimonials


