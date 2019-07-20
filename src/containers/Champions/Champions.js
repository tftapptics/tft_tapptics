import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


class Champions extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      currentChampion: {
        attributes: {
          data: {
            health: [],
            ability_info: {
              attributes: [{damage: [] }],
            },
          },
          origin_class_type: {
          data: [{
            attributes: {
              data: {
          tier_info: [], tiers: [],
              }
            }
          }]
        }
      }
    }
  }
}

  handleOpenModal = (e) => {
    const { id } = e.target
    let champion = this.props.champions.find(champion => champion.id == id);
    this.setState({currentChampion: champion, showModal: true})
  }

  handleCloseModal = () => {
    this.setState({showModal: false, currentChampion: {
      attributes: {
        data: {
          health: [],
          ability_info: {
            attributes: [{damage: [] }],
          },
        },
        origin_class_type: {
          data: [{
            attributes: {
              data: {
                tier_info: [],
                tiers: [],
                }
              }
            }]
          }
        }
      }
    });
  }

  // / <h5> {this.state.currentChampion.origin_class_type.data[1].attributes.data.thumbnail}</h5> / {this.state.currentChampion.attributes.origin_class_type.data[2] &&this.state.currentChampion.attributes.origin_class_type.data[2].attributes.data.thumbnail} 
  

  render() {
    const displayChampions = this.props.champions.map(champ => (
        <article id={champ.id} onClick={(e) => this.handleOpenModal(e)}>
          <img id={champ.id} src={champ.attributes.data.champion_thumbnail}/>
        </article>))

    let displayModal = (
      <article className="display-modal">
        <button className="update-modal" onClick={this.handleCloseModal}>X</button>
        <img src={this.state.currentChampion.attributes.data.champion_thumbnail} />
        <h3><i class="fas fa-coins"></i> {this.state.currentChampion.attributes.data.name}</h3>
        <h5>{this.state.currentChampion.attributes.data.cost}</h5>
        <div className="modal-class-origin">
          {this.state.currentChampion.attributes.origin_class_type.data.map(i => 
            (<img src={i.attributes.data.thumbnail} alt={i.attributes.data.name} />)
          )}
          </div>
        <h5>Health: {this.state.currentChampion.attributes.data.health[0]} / {this.state.currentChampion.attributes.data.health[1]} / {this.state.currentChampion.attributes.data.health[2]}</h5>
        <h5>Damage: {this.state.currentChampion.attributes.data.dmg}</h5>
        <h5>Attack Speed: {this.state.currentChampion.attributes.data.atk_spd}</h5>
        <h5>Magic Resistance: {this.state.currentChampion.attributes.data.mr}</h5>
        <h5>Armor: {this.state.currentChampion.attributes.data.armor}</h5>
        <p>{this.state.currentChampion.attributes.data.range}</p>
        <section className="section-passive">
          <h4>{this.state.currentChampion.attributes.data.ability_info.title}</h4>
          <img src={this.state.currentChampion.attributes.data.ability_thumbnail} alt={this.state.currentChampion.attributes.data.ability_info.title} />
          <p>{this.state.currentChampion.attributes.data.ability_info.descrption}</p>
          <p>Damage: {this.state.currentChampion.attributes.data.ability_info.attributes[0].damage[0]} / {this.state.currentChampion.attributes.data.ability_info.attributes[0].damage[1]} / {this.state.currentChampion.attributes.data.ability_info.attributes[0].damage[2]}</p>
        </section>
      </article>)


    return (
      <section className="Champions">
        <h3>All Champions</h3>
        <section className="display-champs">
        {displayChampions}
        </section>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Champion Modal">
           <div className="modal-display-champions">
          { this.state.showModal && displayModal }
          </div>
        </Modal>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  champions: state.champions
})

export default connect(mapStateToProps)(Champions)