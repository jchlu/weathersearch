import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectUnit } from '../actions'

class UnitToggle extends Component {
  render() {
    return (
      <div className='btn-group btn-group-toggle' data-toggle='buttons'>
        <label className={`btn btn-secondary ${this.props.activeUnit === 'metric' ? 'active' : ''}`}>
          <input
            type='radio'
            name='unit'
            id='metric'
            autoComplete='off'
            onClick={event => this.props.selectUnit(event.target.id)}
          />C
        </label>
        <label className={`btn btn-secondary ${this.props.activeUnit === 'imperial' ? 'active' : ''}`}>
          <input
            type='radio'
            name='unit'
            id='imperial'
            autoComplete='off'
            onClick={event => this.props.selectUnit(event.target.id)}
          />F
        </label>
        <label className={`btn btn-secondary ${this.props.activeUnit === 'standard' ? 'active' : ''}`}>
          <input
            type='radio'
            name='unit'
            id='standard'
            autoComplete='off'
            onClick={event => this.props.selectUnit(event.target.id)}
          />K
        </label>
      </div>
    )
  }
}

const mapStateToProps = state => ({ activeUnit: state.activeUnit })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectUnit: selectUnit }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitToggle)
