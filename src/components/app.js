import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import CountryList from '../containers/country_list'
import WeatherList from '../containers/weather_list'

export default _ => (
  <div>
    <SearchBar />
    <WeatherList />
  </div>
)
