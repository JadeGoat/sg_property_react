import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PinsLayer = ( {locations} ) => {

    // Default blue icon (same as Leaflet's default)
      const defaultIcon = L.icon({
        iconUrl: '../images/marker-icon.png',
        shadowUrl: '../images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    
      // Red icon
      const redIcon = L.icon({
        iconUrl: '../images/marker-icon-red.png',
        shadowUrl: '../images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

  return (
    <div>
        {
            locations.map((loc, idx) => (
            <Marker key={idx} 
                    position={[loc.lat, loc.lon]}
                    icon={loc.postal_code === "Unknown" ? redIcon : defaultIcon} >
                <Popup>{loc.label}</Popup>
            </Marker>
        ))}
    </div>
  )
}

export default PinsLayer