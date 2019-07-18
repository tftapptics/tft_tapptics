import React from 'react'

export default function Stats({currentTeam}) {
  let displayTeamStats = currentTeam.map(member => (
  <article>
    <img src={member.img} alt={`${member.name} portrait`} />
    <div>
      <h5>{member.name}</h5>
      <h6>Health: {member.health}</h6>
      <h6>Damage: {member.dmg}</h6>
    </div>
  </article>
  ))

  return (
    <section className="Stats">
      {displayTeamStats}
    </section>
  )
}
