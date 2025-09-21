import { MapContainer, TileLayer } from 'react-leaflet';
import PinsLayer from './PinsLayer';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapWithPins.css'

const MapWithPins = ( {centerCoordinate, zoomValue, locations} ) => {

  return (
    <MapContainer className='mapWithPinsContainer' center={centerCoordinate} zoom={zoomValue}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinsLayer locations={locations} />
    </MapContainer>
  );
};

export default MapWithPins;
