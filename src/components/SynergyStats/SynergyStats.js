import React from 'react'

export default function SynergyStats({name, thumbnail}) {
  return (
    <article className={`${name}`}>
      <img src={thumbnail} alt={name} />
      <h6>{name}</h6>
    </article>
  )
}
