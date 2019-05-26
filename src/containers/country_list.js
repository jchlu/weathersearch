import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectCountry } from '../actions/'

class CountryList extends Component {

  renderList() {
    return this.props.countries.map(country => {
      // const selected = country.code == this.state.activeCountry ? defaultValue : ''
      return (
      <option
        key={country.code}
        value={country.code}
      >
        {country.description}
      </option>
    )})
  }

  render() {
    return <div className='col-auto my-1'>
      <select
        value={this.props.activeCountry}
        onChange={event => this.props.selectCountry(event.target.value)}
        className='custom-select mr-sm-2'
        id='country'>{this.renderList()}
      </select>
    </div>
  }
}

const mapStateToProps = state => ({
  countries: state.countries,
  activeCountry: state.activeCountry
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectCountry: selectCountry }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)
