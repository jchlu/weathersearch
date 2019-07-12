import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapMarker = _ => <div></div>

export default ({ lat, lon, cityName }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '250px', width: '250px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
        defaultCenter={{ lat: lat, lng: lon }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker
          lat={lat}
          lng={lon}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </GoogleMapReact>
    </div>
  )
}
