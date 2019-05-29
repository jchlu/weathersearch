import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectCountry } from '../actions/'

const CountryList = ({ countries, selectCountry, activeCountry }) => (
  <div className='col-auto my-1'>
    <select
      value={activeCountry}
      onChange={event => selectCountry(event.target.value)}
      className='custom-select mr-sm-2'
      id='country'
    >
      {renderList(countries)}
    </select>
  </div>
)

const renderList = countries => countries.map(country => (
  <option key={country.code} value={country.code}>
    {country.description}
  </option>
))

const mapStateToProps = state => ({
  countries: state.countries,
  activeCountry: state.activeCountry
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectCountry }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryList)
