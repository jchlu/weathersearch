import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import UnitLetter from '../components/unit_letter'

const WeatherList = ({ weather, activeUnit }) => {
  const renderWeather = cityData => {
    const temps = cityData.list.map(city => city.main.temp)
    const meanTemp = _.round(_.mean(temps), 2)
    const pressures = cityData.list.map(city => city.main.pressure)
    const meanPressure = _.round(_.mean(pressures), 2)
    const humidities = cityData.list.map(city => city.main.humidity)
    const meanHumidity = _.round(_.mean(humidities), 2)
    return (
      <tr key={cityData.city.id} >
        <th scope='row'>{cityData.city.name}</th>
        <td>
          <Chart data={temps} color='orange' />
          <div>
            {`Mean Temp: ${meanTemp} `}
            <UnitLetter activeUnit={activeUnit}/>
          </div>
        </td>
        <td>
          <Chart data={pressures} color='green' />
          <div>Mean Pressure: {meanPressure} hPa</div>
        </td>
        <td>
          <Chart data={humidities} color='blue' />
          <div>Mean Humidity: {meanHumidity} %</div>
        </td>
      </tr>
    )
  }

  return (
    <table className='table table-hover table-striped'>
      <thead className='thead-light'>
        <tr>
          <th scope='row'>City</th>
          <th scope='row'>Temperature</th>
          <th scope='row'>Pressure</th>
          <th scope='row'>Humidity</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  )
}

const mapStateToProps = ({ weather, activeUnit }) => ({ weather, activeUnit })

export default connect(mapStateToProps)(WeatherList)
