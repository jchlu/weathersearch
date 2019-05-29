import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/'
import CountryList from './country_list'
import UnitToggle from './unit_toggle'

const SearchBar = ({ activeCountry, activeUnit, fetchWeather }) => {
  const [term, setTerm] = useState('')

  return (
    <form onSubmit={event => {
      event.preventDefault()
      /** Trigger action passed in by mapDispatchToProps */
      fetchWeather(term, activeCountry, activeUnit)
      /** Clear the term (and therefore the input box, which uses state.term for value) */
      setTerm('')
    }}>
      <div className='form-row align-items-center'>
        <UnitToggle />
        <div className='col-5 my-1'>
          <input
            placeholder='Get a five-day forecast in your favourite cities'
            className='form-control'
            value={term}
            onChange={event => {
              setTerm(event.target.value)
            }}
          />
        </div>
        <CountryList />
        <div className='col-1 my-1'>
          <button type='submit' className='btn btn-secondary'> Submit </button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = ({ activeCountry, activeUnit }) => ({ activeCountry, activeUnit })

/** Make actions available inside the class */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchWeather }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
