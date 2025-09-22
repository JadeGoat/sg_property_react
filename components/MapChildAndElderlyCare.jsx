import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLegendLayer from './LegendLayer';
import L from 'leaflet';
import '../css/MapChildAndElderlyCare.css'

const MapChildAndElderlyCare = ({ centerCoordinate, zoomValue, childCareData, elderlyCareData, newCenter }) => {

    // Customize legend here
    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div>
              <div style="background-color:orange; width:10px; height:10px; 
                   border-radius:50%; border:1px solid white;">
              </div>
              <i>Child Care</i>
            </div>
            <div>
              <div style="background-color:blue; width:10px; height:10px; 
                   border-radius:50%; border:1px solid white;">
              </div>
              <i>Elderly Care</i>
            </div>
        <section>
      `

    const orangePointToLayer = (feature, latlng) => {
      const icon = L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color:orange; width:10px; height:10px; 
                    border-radius:50%; border:1px solid white;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      return L.marker(latlng, { icon });
    };

    const bluePointToLayer = (feature, latlng) => {
      const icon = L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color:blue; width:10px; height:10px; 
                    border-radius:50%; border:1px solid white;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      return L.marker(latlng, { icon });
    };

    return (
      <MapContainer className='mapChildAndElderlyCareContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON key={JSON.stringify(childCareData)} data={childCareData} pointToLayer={orangePointToLayer} />
        <GeoJSON key={JSON.stringify(elderlyCareData)} data={elderlyCareData} pointToLayer={bluePointToLayer} />
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    )
}

export default MapChildAndElderlyCare