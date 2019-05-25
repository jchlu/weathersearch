import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (event) {
    event.preventDefault()
    console.log(this.state.term)
    // process.env.API_KEY
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit/* event => {event.preventDefault()} */} className="input-group">
        <input
          placeholder='Get a five-day forecast in your favourite cities'
          className='form-control'
          value={this.state.term}
          onChange={event => {this.setState({ term: event.target.value })}}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}
