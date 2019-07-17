import React from 'react'

export default function Stats({currentTeam}) {
  let displayTeamStats = currentTeam.map(member => (
  <article>
    <h5>{member.name}</h5>
    <h6>{member.health}</h6>
    <h6>{member.dmg}</h6>
  </article>
  ))
  return (
    <section>
      {displayTeamStats}
    </section>
  )
}
