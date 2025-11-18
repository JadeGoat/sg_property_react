import { MapContainer, TileLayer, Circle, Polygon } from 'react-leaflet';
import { RecenterMap, createLegend } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import PinsLegendLayer from './LegendLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapRetailServices.css'

const MapRetailServices = ({ centerCoordinate, zoomValue, supermarketsLocations, newCenter, radius, townArea }) => {

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
              pathOptions={{ color: 'red', fillColor: 'red', weight: 2, fillOpacity: 0.2 }}
            /> : <></>
        }
        { townArea ? 
            <Polygon
              positions={townArea}
              pathOptions={{ color: 'red', fillColor: 'red', weight: 2, fillOpacity: 0.2 }}
            /> : <></>
        }
        <PinsLegendLayer legendHtml={legendHtml} />
      </MapContainer>
    );
};

export default MapRetailServices;
