import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { RecenterMap, createLegend } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapRetailServices.css'

const MapRetailServices = ({ centerCoordinate, zoomValue, supermarketsLocations, newCenter, radius }) => {

    // Customize legend here
    const legendIconColorList = [""]
    const legendIconDescList = ["Supermarkets"]
    const legendHtml = createLegend(legendIconColorList, legendIconDescList)

    return (
      <MapContainer className='mapRetailServicesContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer locations={supermarketsLocations} color="" />
        { radius ? 
            <Circle
              center={newCenter}
              radius={radius * 1000} // takes in metres, converts km to metres
              pathOptions={{ color: 'pink', fillColor: 'pink', fillOpacity: 0.3 }}
            /> : <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    );
};

export default MapRetailServices;
