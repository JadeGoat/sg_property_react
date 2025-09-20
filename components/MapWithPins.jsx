import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapWithPins.css'

const MapWithPins = ( {centerCoordinate, zoomValue, locations} ) => {

  // Default blue icon (same as Leaflet's default)
  const defaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Red icon
  const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer className='mapWithPinsContainer' center={centerCoordinate} zoom={zoomValue}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        locations.map((loc, idx) => (
          <Marker key={idx} 
                  position={[loc.lat, loc.lon]}
                  icon={loc.postal_code === "Unknown" ? redIcon : defaultIcon} >
            <Popup>{loc.label}</Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithPins;
