import { MapContainer, TileLayer, GeoJSON, Circle } from 'react-leaflet';
import { RecenterMap, createLegend, createDivIcon } from '../scripts/MapUtils.js'
import PinsLegendLayer from './LegendLayer';
import L from 'leaflet';
import '../css/MapPersonalCare.css'

const MapPersonalCare = ({ centerCoordinate, zoomValue, 
                           childCareData, elderlyCareData, disabilityServicesData, 
                           newCenter, radius }) => {

    // Customize legend here
    const legendIconColorList = ["-orange", "", "-green"]
    const legendIconDescList = ["Child Care", "Elderly Care", "Disability Services"]
    const legendHtml = createLegend(legendIconColorList, legendIconDescList)
    
    const orangePointToLayer = (feature, latlng) => {
      const icon = createDivIcon("-orange", 30, 30)
      return L.marker(latlng, { icon });
    };

    const bluePointToLayer = (feature, latlng) => {
      const icon = createDivIcon("", 30, 30)
      return L.marker(latlng, { icon });
    };

    const greenPointToLayer = (feature, latlng) => {
      const icon = createDivIcon("-green", 30, 30)
      return L.marker(latlng, { icon });
    };

    const onEachFeature = (feature, layer) => {
      if (feature.address) {
        layer.bindPopup(`${feature.name}<br>Address: ${feature.address}`);
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
        <GeoJSON key={JSON.stringify(disabilityServicesData)} 
                 data={disabilityServicesData} 
                 pointToLayer={greenPointToLayer} onEachFeature={onEachFeature} />
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