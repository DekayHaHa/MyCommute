import React from 'react'
import { Link } from 'react-router-dom'

export const PageError = () => {
  return (
    <section className='error-page'>
      <h1>ERROR 404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link to='/'><p>Return to Home</p></Link>
    </section>
  )
}