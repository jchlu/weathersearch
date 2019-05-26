import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindCreators, bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/'
import CountryList from './country_list'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(event) {
    /** Stop normal submit action on <Enter> or button click */
    event.preventDefault()
    /** Trigger action passed in by mapDispatchToProps */
    this.props.fetchWeather(this.state.term, this.props.activeCountry)
    /** Clear the term (and therefore the input box, which uses state.term for value) */
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-row align-items-center">
          <div className="col-5 my-1">
            <input
              placeholder="Get a five-day forecast in your favourite cities"
              className="form-control"
              value={this.state.term}
              onChange={event => {
                this.setState({ term: event.target.value })
              }}
            />
          </div>
          <CountryList />
          <div className="col-1 my-1">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  term: state.term,
  activeCountry: state.activeCountry
})

/** Make actions available inside the class */
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchWeather }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
