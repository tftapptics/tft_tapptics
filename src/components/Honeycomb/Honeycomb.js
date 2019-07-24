import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentRosterIndex } from '../../actions'

export class Honeycomb extends Component {



  render() {
    {
      if(this.props.img !== '') {
        return (
          <div className='tiles-main' style={{backgroundColor: 'rgba(63, 81, 181, 0.58)'}} onDragOver={() => this.props.setRosterIndex(this.props.idx)}>
            <img className='tile-img' src={this.props.img}/>
          </div>
        )
      } else {
        return (
          <div className='tiles-main' onDragOver={() => this.props.setRosterIndex(this.props.idx)}>
          </div>
        )
      }
    }
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setRosterIndex: (idx) => dispatch(setCurrentRosterIndex(idx))
})

export default connect(null, mapDispatchToProps)(Honeycomb)
