import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentDragIndex, upDateRosterInfo } from '../../actions'

class HoneycombDrag extends Component {
  constructor(props) {
    super(props)
  }

  onDragEnd = () => {
    const charinfo = this.props.champions[this.props.dragIndex];
    this.props.updateRoster(this.props.rosterIndex, charinfo)
  }

  render() {
    const {name, image, idx} = this.props
    const firstName = name.split(',')[0]
    return (
      <div className='tiles' 
           draggable='true'
           onDragStart={() => this.props.setDragIndex(idx)}
           onDragEnd={this.onDragEnd}>
        {/* <p className='drag-name icon'>{firstName}</p> */}
        <img className='drag-icon icon' src={image} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  champions: state.champions,
  rosterIndex: state.rosterIndex,
  dragIndex: state.dragIndex
})

const mapDispatchToProps = (dispatch) => ({
  setDragIndex: (index) => dispatch(setCurrentDragIndex(index)),
  updateRoster: (index, charIdx) => dispatch(upDateRosterInfo(index, charIdx))
})

export default connect(mapStateToProps, mapDispatchToProps)(HoneycombDrag);
