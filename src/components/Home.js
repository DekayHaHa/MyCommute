import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <section className='card-object'>
      <h2>Welcome to My Commute</h2>
      <p>We provide users with recommended modes of travel instantly based on User Commutes and User Preferences. This can include but is not limited to modes of transportation(by priority), limited by temperature, wind speed, and remaining time left for your prompt arrival to your destination. LOREM IPSUM -->> A full suspension bike with 3+ inches of travel will greatly enhance your experience! Other features include rock garden (that is rutted on the outer edges because XC peeps avoid it), skinny with twists and some other short elevated bridges. It packs in a lot of excitement in a short amount of time.</p>
      <p>Please <Link to='/login'>Login</Link> to continue</p>
    </section>
  )
}