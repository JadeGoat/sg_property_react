import { MapContainer, TileLayer, GeoJSON, Circle } from 'react-leaflet';
import { RecenterMap, createLegend, createDivIcon } from '../scripts/MapUtils.js'
import PinsLegendLayer from './LegendLayer.jsx';
import L from 'leaflet';
import '../css/MapFoodServices.css'

const MapFoodServices = ({ centerCoordinate, zoomValue,
                                 hawkerCentreData, healthierEateriesData, newCenter, radius }) => {

    // Customize legend here
    const legendIconColorList = ["-orange", ""]
    const legendIconDescList = ["Hawker Centre", "Healthier Eateries"]
    const legendHtml = createLegend(legendIconColorList, legendIconDescList)

    const orangePointToLayer = (feature, latlng) => {
      const icon = createDivIcon("-orange", 30, 30)
      return L.marker(latlng, { icon });
    };

    const bluePointToLayer = (feature, latlng) => {
      const icon = createDivIcon("", 30, 30)
      return L.marker(latlng, { icon });
    };

    const onEachFeature = (feature, layer) => {
      if (feature.properties && feature.properties.NAME) {
        layer.bindPopup(`${feature.properties.NAME}`);
      }
      else if (feature.name) {
        layer.bindPopup(`${feature.name}<br>Address: ${feature.address} SINGAPORE ${feature.postal_code}`);
      }
    };

    return (
      <MapContainer className='mapFoodServicesContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON key={JSON.stringify(hawkerCentreData)} 
                 data={hawkerCentreData} 
                 pointToLayer={orangePointToLayer} onEachFeature={onEachFeature} />
        <GeoJSON key={JSON.stringify(healthierEateriesData)} 
                 data={healthierEateriesData} 
                 pointToLayer={bluePointToLayer} onEachFeature={onEachFeature}/>
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

export default MapFoodServices