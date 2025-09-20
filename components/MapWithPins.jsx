import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
      {
        locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lon]}>
            <Popup>{loc.label}</Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithPins;
