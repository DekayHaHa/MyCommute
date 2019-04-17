import React from 'react';

export const Commute = ({ title, recom, price, estTravel }) => {
  return (
    <div className='card-object'>
      <h2>{title}</h2>
      <p>Recommended Mode of Transportation: {recom}</p>
      <p>This commute will cost: {price}$</p>
      <p>Estimated Travel Time: {estTravel}</p>
    </div>
  )
}