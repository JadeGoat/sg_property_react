import { MapContainer, TileLayer } from 'react-leaflet';
import { RecenterMap } from '../scripts/MapUtils.js'
import PinsLayer from './PinsLayer.jsx';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapBusStop.css'

const MapBusStop = ( {centerCoordinate, zoomValue, locations, newCenter} ) => {

    return (
      <MapContainer className='mapBusStopContainer' center={centerCoordinate} zoom={zoomValue}>
        <RecenterMap center={newCenter} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PinsLayer locations={locations} />
      </MapContainer>
    );
};

export default MapBusStop;
