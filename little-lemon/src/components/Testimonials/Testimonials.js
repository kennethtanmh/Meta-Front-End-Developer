import React from 'react'
import './styles.css'

const reviews = [
  {
    id: 1,
    name: 'Marcus Rashford',
    comment:
      'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    name: 'Bruno Fernandes',
    comment:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
  },
  {
    id: 3,
    name: 'Lisandro Martínez',
    comment:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
  {
    id: 4,
    name: 'Harry Maguire',
    comment:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];


const Testimonials = () => {
  const playerReviews = reviews.map(({ id, name , comment }) => {
    return (
      <div key={id} className='testimonials-map-container'>
        <p className='testimonials-name'>{name}</p>
        <p className='testimonials-description'>{comment}</p>
      </div>
    );
  });

  return (
    <section className='testimonials'>
      <div className='testimonials-header'>
        <h1 className='testimonials-title'>Elevating Culinary Experiences: Hear from Our Cherished Guests!</h1>
      </div>
      <div className='testimonals-cards'>{playerReviews}</div>
    </section>
  )
}

export default Testimonials


