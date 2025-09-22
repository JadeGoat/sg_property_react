import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import '../css/MapChildAndElderlyCare.css'

const MapChildAndElderlyCare = ({ centerCoordinate, zoomValue, childCareData, elderlyCareData }) => {

  const greenPointToLayer = (feature, latlng) => {

    // Use color from geojson
    //const color = feature.properties.color

    // Overwrite default color in geojson
    const color = "lightgreen";

    const icon = L.divIcon({
      className: 'custom-icon',
      html: `<div style="background-color:${color}; width:10px; height:10px; border-radius:50%; border:1px solid white;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    return L.marker(latlng, { icon });
  };

  const bluePointToLayer = (feature, latlng) => {
    
    // Use color from geojson
    //const color = feature.properties.color

    // Overwrite default color in geojson
    const color = "blue";

    const icon = L.divIcon({
      className: 'custom-icon',
      html: `<div style="background-color:${color}; width:10px; height:10px; border-radius:50%; border:1px solid white;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    return L.marker(latlng, { icon });
  };

  return (
    <MapContainer className='mapChildAndElderlyCareContainer' center={centerCoordinate} zoom={zoomValue}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={childCareData} pointToLayer={greenPointToLayer} />
      <GeoJSON data={elderlyCareData} pointToLayer={bluePointToLayer} />
    </MapContainer>
  )
}

export default MapChildAndElderlyCare