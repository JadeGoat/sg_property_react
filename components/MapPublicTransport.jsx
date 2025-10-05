import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import 'leaflet/dist/leaflet.css';
import '../css/MapBusStop.css'

const MapPublicTransport = ({ centerCoordinate, zoomValue, busStopLocations, mrtStationLocations, newCenter, radius }) => {

    return (
      <MapContainer className='mapBusStopContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer locations={busStopLocations} />
        {/* <PinsLayer locations={mrtStationLocations} /> */}
        { radius ? 
            <Circle
              center={newCenter}
              radius={radius * 1000} // takes in metres, converts km to metres
              pathOptions={{ color: 'pink', fillColor: 'pink', fillOpacity: 0.3 }}
            /> : <></>
        }
      </MapContainer>
    );
};

export default MapPublicTransport;
