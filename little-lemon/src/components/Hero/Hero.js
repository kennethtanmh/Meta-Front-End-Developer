import React from 'react'
import heroImg from '../../img/heroimg.jpg'

const Hero = () => {
  return (
    <section>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned Mediterranean restaurant,focused on traditional recipes served with a mordern twist.</h3>
            <button>
                Reserve a Table
            </button>
        </div>
        <div>
            <img src={heroImg} alt="resturantfood"></img>
        </div>
    </section>
  )
}

export default Hero