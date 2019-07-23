import React from 'react';
import { connect } from 'react-redux';

export const Items = props => {
  let displayItems = props.items.map(item => (
    <article>
      <img src={item.attributes.thumbnail} alt={item.attributes.name} />
      <h4>{item.attributes.name}</h4>
      <p>{item.attributes.stat_boost}</p>
    </article>
  ))
  return (
    <section className="Items">
      <h3>items & item builds</h3>
      <section className="display-items">
        {displayItems}
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps)(Items)