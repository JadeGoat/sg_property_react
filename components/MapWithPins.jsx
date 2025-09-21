import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import PinsLayer from './PinsLayer';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';
import '../css/MapWithPins.css'

const MapWithPins = ( {centerCoordinate, zoomValue, locations, newCenter} ) => {

  function RecenterMap({ center }) {
    const map = useMap();
    
    useEffect(() => {
        if (center) {
          map.flyTo(center, map.getZoom());
        }
      }, [center, map]);

      return null;
    }

  return (
    <MapContainer className='mapWithPinsContainer' center={centerCoordinate} zoom={zoomValue}>
      <RecenterMap center={newCenter} />
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinsLayer locations={locations} />
    </MapContainer>
  );
};

export default MapWithPins;
