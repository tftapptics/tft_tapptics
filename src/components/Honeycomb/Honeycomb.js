import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentRosterIndex } from '../../actions'

export class Honeycomb extends Component {



  render() {
    {
      if(!this.props.rost === {}) {
        return (
          <div className='tiles-main' onDragOver={() => this.props.setRosterIndex(this.props.idx)}>
            {this.props.rost.attributes.model_img}
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
