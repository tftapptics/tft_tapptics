import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


class Champions extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      currentChampion: { attributes: { data: {} } }
    }
  }

  handleOpenModal = (e) => {
    const { id } = e.target
    let champion = this.props.champions.find(champion => champion.id == id);
    this.setState({currentChampion: champion, showModal: true})
  }

  handleCloseModal = () => {
    this.setState({showModal: false, currentChampion: { attributes: { data: {} } }});
  }
  

  render() {
    const displayChampions = this.props.champions.map(champ => (
        <article id={champ.id} onClick={(e) => this.handleOpenModal(e)}>
          <img id={champ.id} src={champ.attributes.data.champion_thumbnail}/>
        </article>))

    let displayModal = (
      <article>
        <img src={this.state.currentChampion.attributes.data.champion_thumbnail} />
        <h3>{this.state.currentChampion.attributes.data.name}</h3>
        <button className="update-modal" onClick={this.handleCloseModal}>X</button>
      </article>)
  
    return (
      <section className="Champions">
        <h3>All Champions</h3>
        {displayChampions}
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