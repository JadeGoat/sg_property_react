import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLegendLayer from './LegendLayer.jsx';
import L from 'leaflet';
import '../css/MapHawkersAndEateries.css'

const MapHawkersAndEateries = ({ centerCoordinate, zoomValue,
                                 hawkerCentreData, healthierEateriesData, newCenter, radius }) => {

    // Customize legend here
    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div>
              <img src="../images/marker-icon-orange.png"/>
              <i>Hawker Centre</i>
            </div>
            <div>
              <img src="../images/marker-icon.png"/>
              <i>Healthier Eateries</i>
            </div>
        <section>
      `

    const orangePointToLayer = (feature, latlng) => {
      const icon = L.divIcon({
        className: 'custom-icon',
        html: `<img src="../images/marker-icon-orange.png" width=25 height=25 />`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      return L.marker(latlng, { icon });
    };

    const bluePointToLayer = (feature, latlng) => {
      const icon = L.divIcon({
        className: 'custom-icon',
        html: `<img src="../images/marker-icon.png" width=25 height=25 />`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      return L.marker(latlng, { icon });
    };

    return (
      <MapContainer className='mapHawkersAndEateriesContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON key={JSON.stringify(hawkerCentreData)} 
                 data={hawkerCentreData} 
                 pointToLayer={orangePointToLayer} />
        <GeoJSON key={JSON.stringify(healthierEateriesData)} 
                 data={healthierEateriesData} 
                 pointToLayer={bluePointToLayer} />
        { 
          radius ? 
          <Circle
            center={newCenter}
            radius={radius * 1000} // takes in metres, converts km to metres
            pathOptions={{ color: 'pink', fillColor: 'pink', fillOpacity: 0.3 }}
          /> : 
          <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    )
}

export default MapHawkersAndEateries