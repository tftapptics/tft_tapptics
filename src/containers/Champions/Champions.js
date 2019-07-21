import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';


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
            attributes: [{damage: []}],
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
  

  render() {
    const displayChampions = this.props.champions.map(champ => (
        <article id={champ.id} onClick={(e) => this.handleOpenModal(e)}>
          <img id={champ.id} src={champ.attributes.data.champion_thumbnail}/>
        </article>))

    let displayModal = (
      <article className="display-modal">
        <button className="x-btn" onClick={this.handleCloseModal}>X</button>
        <img src={this.state.currentChampion.attributes.data.champion_thumbnail} alt={this.state.currentChampion.attributes.data.name} className="modal-thumbnail" />
        <h3 className="modal-name">{this.state.currentChampion.attributes.data.name}</h3>
        <h5 className="modal-cost"><i class="fas fa-coins"></i>  {this.state.currentChampion.attributes.data.cost}</h5>
        <p className="modal-range">Range: {this.state.currentChampion.attributes.data.range}</p>
        <div className="modal-class-origin">
          {this.state.currentChampion.attributes.origin_class_type.data.map(i => 
            (<div>
              <a data-tip data-for={i.attributes.data.name}>
              <img src={i.attributes.data.thumbnail} alt={i.attributes.data.name} />
            </a>
              <ReactTooltip id={i.attributes.data.name} type='success' >
                <span>{i.attributes.data.name}</span>
              </ReactTooltip>
            </div>
            )
          )}
          </div>
        <div className="modal-stats">
          <h5 className="modal-health">Health: {this.state.currentChampion.attributes.data.health[0]} / {this.state.currentChampion.attributes.data.health[1]} / {this.state.currentChampion.attributes.data.health[2]}</h5>
          <h5 className="modal-stat">Damage: {this.state.currentChampion.attributes.data.dmg}</h5>
          <h5 className="modal-stat">Attack Speed: {this.state.currentChampion.attributes.data.atk_spd}</h5>
          <h5 className="modal-stat">Magic Resistance: {this.state.currentChampion.attributes.data.mr}</h5>
          <h5 className="modal-stat">Armor: {this.state.currentChampion.attributes.data.armor}</h5>
        </div>
        <img src={this.state.currentChampion.attributes.data.ability_thumbnail}
          alt={this.state.currentChampion.attributes.data.ability_name}
          className="modal-p-thumbnail" />
        <section className="modal-p-info">
          <h4 className="modal-p-name">{this.state.currentChampion.attributes.data.ability_name}</h4>
          <p className="modal-p-info">{this.state.currentChampion.attributes.data.ability_info}</p>
        </section>
      </article>)


    return (
      <section className="Champions">
        <h3>All Champions</h3>
        <section className="display-champs">
          {displayChampions}
        </section>
        <ReactModal
           isOpen={this.state.showModal}
           className="Modal"
           contentLabel="Champion Modal">
           <div className="modal-display-champions">
            { this.state.showModal && displayModal }
          </div>
        </ReactModal>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  champions: state.champions
})

export default connect(mapStateToProps)(Champions)