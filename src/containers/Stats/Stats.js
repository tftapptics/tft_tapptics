import React from 'react'

export default function Stats(prop) {


  return (
    <article>
      <img src={prop.img} alt={`${prop.name} portrait`} />
      <div>
        <h5>{prop.name}</h5>
        <h6>Health: {prop.health}</h6>
        <h6>Damage: {prop.dmg}</h6>
      </div>
    </article>
  )
}
