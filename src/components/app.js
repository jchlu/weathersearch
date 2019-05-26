import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import CountryList from '../containers/country_list'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
