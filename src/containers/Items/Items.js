import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItemName } from '../../actions';
import ReactTooltip from 'react-tooltip';

export class Items extends Component {

  findItemName = (e) => {
    const { id } = e.target
    const currentItem = this.props.items.find( item => {
      console.log(item)
      return item.attributes.name == id
    })
    this.props.setItemName(currentItem.attributes.name)
  }

  render () {
    let displayRecipes;

    let displayItems = this.props.items.map(item => (
      <article id={item.attributes.name} onClick={this.findItemName}>
        <img id={item.attributes.name} onClick={this.findItemName} src={item.attributes.thumbnail} alt={item.attributes.name} />
        <h4 id={item.attributes.name} onClick={this.findItemName}>{item.attributes.name}</h4>
        <p id={item.attributes.name} onClick={this.findItemName}>{item.attributes.stat_boost}</p>
      </article>
    ))

    if(this.props.currentItem === '') {
      displayRecipes = this.props.recipes.map(recipe => ( 
        <article className='recipe-box'>
          <a data-tip data-for={recipe.attributes.name}>
            <img src={`https://${recipe.attributes.thumbnail}`} />
            <h4>{recipe.attributes.name}</h4>
          </a>
          <ReactTooltip id={recipe.attributes.name} type='dark' >
            <span className='float'>
              <div className='recipe-items'>
                <img src={recipe.attributes.raw_items[0].thumbnail}/> 
                <p className='plus'>+</p> 
                <img src={recipe.attributes.raw_items[1].thumbnail}/>
              </div>
              <p className='recipe-descript'>{recipe.attributes.description}</p>
            </span>
          </ReactTooltip>
        </article>
      ))
    } else {
      let newRecipes = this.props.recipes.filter( recipe => {
        return recipe.attributes.raw_items.find(rawItem => rawItem.name === this.props.currentItem)
      })
      displayRecipes = newRecipes.map(recipe => (
      <article className='new-recipe-box'>
        <a data-tip data-for={recipe.attributes.name}>
          <img src={`https://${recipe.attributes.thumbnail}`} />
          <h4>{recipe.attributes.name}</h4>
        </a>
        <ReactTooltip id={recipe.attributes.name} type='dark' >
          <span className='float'>
            <div className='recipe-items'>
              <img src={recipe.attributes.raw_items[0].thumbnail}/> 
              <p className='plus'>+</p> 
              <img src={recipe.attributes.raw_items[1].thumbnail}/>
            </div>
            <p className='recipe-descript'>{recipe.attributes.description}</p>
          </span>
        </ReactTooltip>
      </article>
    ))
    }


    return (
      <section className="Items">
        <h3>items & item builds</h3>
        <section className="display-items">
          {displayItems}
        </section>
          <section className="display-recipes">
            {displayRecipes}
          </section> 
      </section>
    )
    }
}

export const mapStateToProps = state => ({
  items: state.items,
  recipes: state.recipes,
  currentItem: state.itemName
})

export const mapDispatchToProps = (dispatch) => ({
  setItemName: name => dispatch(setItemName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)