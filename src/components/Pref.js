import React from 'react'

export const Pref = ({ title, temp, price, estimatedTime, priority }) => {
  return (
    <div className='card-object'>
      <h2>Traveling by {title} is priority {priority}</h2>
      <p>When traveling by {title}...</p>
      <p>It costs {price}$</p>
      <p>It Takes {estimatedTime} minutes</p>
      <p>Only viable above {temp} degrees</p>
    </div>
  )
}