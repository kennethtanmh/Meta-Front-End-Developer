import React from 'react'
import './styles.css'
import TestimonialCard from  '../TestimonialCard/TestimonialCard'

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='testimonial-header'>
        <h1 className='testimonial-title'>Elevating Culinary Experiences: Hear from Our Cherished Guests!"</h1>
      </div>
      <TestimonialCard />
    </section>
  )
}

export default Testimonials