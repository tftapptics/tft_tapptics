import React, { Component } from 'react';
import ReactModal from 'react-modal';


export class Synergies extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentChoice: { attributes: { } }
    }
  }

  handleOpenModal = (e) => {
    const { id } = e.target
    let currentChoice = this.props.synergies.find(syn => syn.id == id);
    this.setState({showModal: true, currentChoice})
  }

  handleCloseModal = () => {
    this.setState({showModal: false, currentChoice: { attributes: { } } })
  }
  
  render() {
    const displaySynergies = this.props.synergies.map(syn => (
     <article key={syn.id} id={syn.id} onClick={(e) => this.handleOpenModal(e)} className="synergy-article">
       <img onClick={(e) => this.handleOpenModal(e)} id={syn.id} src={syn.attributes.thumbnail} />
       <h3 id={syn.id} onClick={(e) => this.handleOpenModal(e)} >{syn.attributes.name}</h3>
       <p id={syn.id} onClick={(e) => this.handleOpenModal(e)} >{syn.attributes.summary}</p>
     </article>
    ))

    const displayModal = (
      <article className="display-synergy-modal">
      <button onClick={this.handleCloseModal}>X</button>
      <div className="syngery-info">
        <img src={this.state.currentChoice.attributes.thumbnail} />
        <h3>{this.state.currentChoice.attributes.name}</h3>
      </div>
       <p>{this.state.currentChoice.attributes.tier_info}</p>
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
           contentLabel="Synergy Modal">
           <div className="modal-display-synergies">
            { this.state.showModal && displayModal }
          </div>
        </ReactModal>
      </div>
    )
  }
}