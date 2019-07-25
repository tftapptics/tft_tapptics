import React, { Component } from 'react';
import ReactModal from 'react-modal';
import ReactTooltip from 'react-tooltip';


export class Synergies extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentChoice: { attributes: { thumbnail: '', name: '', tier_info: []} }
    }
  }

  handleOpenModal = (e) => {
    const { id } = e.target
    let currentChoice = this.props.synergies.find(syn => syn.id == id);
    this.setState({showModal: true, currentChoice})
  }

  handleCloseModal = () => {
    this.setState({showModal: false, currentChoice: { attributes: { thumbnail: '', name: '', tier_info: [] } } })
  }
  
  render() {
    const displaySynergies = this.props.synergies.map(syn => (
     <article key={syn.id} id={syn.id} onClick={(e) => this.handleOpenModal(e)} className="synergy-article">
       <img onClick={(e) => this.handleOpenModal(e)} id={syn.id} src={syn.attributes.thumbnail} />
       <h3 id={syn.id} onClick={(e) => this.handleOpenModal(e)} >{syn.attributes.name}</h3>
       <p id={syn.id} onClick={(e) => this.handleOpenModal(e)} >{syn.attributes.summary}</p>
     </article>
    ))

    const matchingChamps = this.props.champions.reduce((acc, champion) => {
      champion.attributes.origin_class_types.map(type => {
        if (!acc.includes(type.name) && type.name == this.state.currentChoice.attributes.name) {
          acc.push(champion)
        }
      });
      return acc
      }, []);

    const displayModal = (
      <article className="display-synergy-modal">
      <button onClick={this.handleCloseModal}>X</button>
      <div className="syngery-info">
        <img src={this.state.currentChoice.attributes.thumbnail} alt={this.state.currentChoice.attributes.name} />
        <h3>{this.state.currentChoice.attributes.name}</h3>
        {this.state.currentChoice.attributes.tier_info.map(tier => (<p>{tier}</p>))}
      </div>
      <div className="champ-syngery-matches">
        {
          matchingChamps.map(champ => (
          <div>
            <a data-tip data-for={champ.attributes.name}>
              <img src={champ.attributes.champion_thumbnail} alt={champ.attributes.name} />
            </a>
            <ReactTooltip id={champ.attributes.name} type='dark' effect="float" className="modal-tooltip">
                <div>{champ.attributes.name}</div>
                {
                  champ.attributes.origin_class_types.map(type => (
                    <div>{type.name}</div>
                  ))
                }
              </ReactTooltip>
          </div>
          ))
        }
      </div>
      </article>
    )

    return (
      <div className="Synergies">
        <h3>Classes & Origins</h3>
        <section className="display-synergies">
        {displaySynergies}
        </section>
        <ReactModal
           isOpen={this.state.showModal}
           className="Modal"
           id="Synergy-modal"
           contentLabel="Synergy Modal">
           <div className="modal-display-synergies">
            { this.state.showModal && displayModal }
          </div>
        </ReactModal>
      </div>
    )
  }
}