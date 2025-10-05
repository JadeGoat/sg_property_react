import { MapContainer, TileLayer, GeoJSON, Circle } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLegendLayer from './LegendLayer';
import L from 'leaflet';
import '../css/MapPersonalCare.css'

const MapPersonalCare = ({ centerCoordinate, zoomValue, 
                           childCareData, elderlyCareData, newCenter, radius }) => {

    // Customize legend here
    const legendHtml = `
        <p><b>Pin Legend</b></p>
        <section>
            <div>
              <img src="../images/marker-icon-orange.png"/>
              <i>Child Care</i>
            </div>
            <div>
              <img src="../images/marker-icon.png"/>
              <i>Elderly Care</i>
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

    const onEachFeature = (feature, layer) => {
      if (feature.address) {
        layer.bindPopup(feature.address);
      }
    };

    return (
      <MapContainer className='mapPersonalCareContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON key={JSON.stringify(childCareData)} 
                 data={childCareData} 
                 pointToLayer={orangePointToLayer} onEachFeature={onEachFeature} />
        <GeoJSON key={JSON.stringify(elderlyCareData)} 
                 data={elderlyCareData} 
                 pointToLayer={bluePointToLayer} onEachFeature={onEachFeature} />
        { radius ? 
            <Circle
              center={newCenter}
              radius={radius * 1000} // takes in metres, converts km to metres
              pathOptions={{ color: 'pink', fillColor: 'pink', fillOpacity: 0.3 }}
            /> : <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    )
}

export default MapPersonalCare