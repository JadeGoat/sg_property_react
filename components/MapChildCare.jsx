import React from 'react'

const MapChildCare = ({ centerCoordinate, zoomValue, geojsonData }) => {
  return (
    <MapContainer className='mapChildCareContainer' center={centerCoordinate} zoom={zoomValue}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={geojsonData} />
    </MapContainer>
  )
}

export default MapChildCare